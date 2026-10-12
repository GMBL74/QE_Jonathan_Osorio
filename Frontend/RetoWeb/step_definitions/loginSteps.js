const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { userProfiles } = require('../config/users');
const assert = require('assert');

// Configuración para usar tu Google Chrome local y saltar el bloqueo corporativo
Before(async function () {
  this.browser = await chromium.launch({
    headless: false, 
    channel: 'chrome',
    slowMo: 500
  });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given('que el usuario abre la página de inicio de sesión', async function () {
  await this.loginPage.navigate();
});

// Leer de forma dinámica interna las contraseñas 
When('el usuario intenta autenticarse con el perfil {string}', async function (profileName) {
  const userCredentials = userProfiles[profileName];
  
  if (!userCredentials) {
    throw new Error(`El perfil de usuario "${profileName}" no está definido en config/users.js`);
  }

  await this.loginPage.login(userCredentials.username, userCredentials.password);
});

// Inyectar las credenciales de manera interna 
When('el usuario ingresa el usuario {string} y la contraseña {string}', async function (username, password) {
  await this.productsPage.waitForPageToLoad();
  await this.loginPage.login(username, password);
});

Then('el usuario es redirigido a la página de productos', async function () {
  const title = await this.productsPage.getTitleText();
  assert.strictEqual(title, 'Products', 'No se redirigió a la página de productos.');
  await this.productsPage.waitForPageToLoad();
});

Then('se debe mostrar el mensaje de error {string}', async function (expectedError) {
  const actualError = await this.loginPage.getErrorMessageText();
  assert.ok(actualError.includes(expectedError), `Error esperado: "${expectedError}"`);
 
});
