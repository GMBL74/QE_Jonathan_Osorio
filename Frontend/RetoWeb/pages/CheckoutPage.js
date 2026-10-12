const { checkoutLocators } = require('./locators/checkoutLocators');

class CheckoutPage {
  constructor(page) {
    this.page = page;
     this.checkoutButton = page.locator(checkoutLocators.checkoutButton);
    this.firstNameInput = page.locator(checkoutLocators.firstNameInput);
    this.lastNameInput = page.locator(checkoutLocators.lastNameInput);
    this.postalCodeInput = page.locator(checkoutLocators.postalCodeInput);
    this.continueButton = page.locator(checkoutLocators.continueButton);
    this.finishButton = page.locator(checkoutLocators.finishButton);
    this.completeHeader = page.locator(checkoutLocators.completeHeader);
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async completePurchase() {
    await this.finishButton.click();
  }

  async getSuccessMessageText() {
    return await this.completeHeader.textContent();
  }
}

module.exports = { CheckoutPage };
