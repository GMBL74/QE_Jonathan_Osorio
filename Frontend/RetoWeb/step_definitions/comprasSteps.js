const { Given, When, Then } = require('@cucumber/cucumber');
const { userProfiles } = require('../config/users');
const assert = require('assert');


Given('que el usuario ha iniciado sesión con el perfil {string}', async function (profileName) {
  await this.loginPage.navigate();
  const userCredentials = userProfiles[profileName];
  if (!userCredentials) {
    throw new Error(`El perfil de usuario "${profileName}" no está definido en config/users.js`);
  }
  await this.loginPage.login(userCredentials.username, userCredentials.password);
});

When('el usuario agrega el primer producto disponible al carrito', async function () {
  await this.productsPage.addFirstItemToCart();
});

// Verificamos la lista 
Then('el usuario accede al carrito de compras y verifica que el producto esté listado', async function () {
  await this.productsPage.goToCart();
  await this.checkoutPage.startCheckout();
  await this.productsPage.waitForPageToLoad();
});

// Completa el flujo de compra
When('procede a completar el formulario de checkout con {string}, {string} y {string}', async function (firstName, lastName, postalCode) {
  await this.productsPage.goToCart();
  await this.checkoutPage.startCheckout();
  await this.checkoutPage.fillInformation(firstName, lastName, postalCode);
  await this.productsPage.waitForPageToLoad();
});

When('confirma la orden de compra final', async function () {
  await this.checkoutPage.completePurchase();
});

Then('se debe visualizar el mensaje de éxito {string}', async function (expectedSuccessMessage) {
  const actualMessage = await this.checkoutPage.getSuccessMessageText();
  assert.strictEqual(actualMessage, expectedSuccessMessage, 'El mensaje de éxito no coincide.');
});
