class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.firstInventoryItemButton = page.locator('.inventory_item button').first();
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async waitForPageToLoad() {
    await this.pageTitle.waitFor({ state: 'visible', timeout: 9000 });
  }

  async getTitleText() {
    return await this.pageTitle.textContent();
  }

  async addFirstItemToCart() {
    await this.firstInventoryItemButton.click();
    // reintento: en algunas corridas el primer click no se registraba (flaky reportado en CI)
    await this.firstInventoryItemButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = { ProductsPage };
