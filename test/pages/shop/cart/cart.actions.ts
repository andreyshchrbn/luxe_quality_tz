import { CartPage } from './cart.page';

export class CartActions {
    private readonly cartPage = new CartPage();

    async verifyCartContent(expectedProductName: string): Promise<void> {
        await expect(this.cartPage.pageTitle).toHaveText('Your Cart');
        await expect(this.cartPage.cartItemName).toHaveText(expectedProductName);
    }

    async proceedToCheckout(): Promise<void> {
        await this.cartPage.checkoutButton.click();
    }
}

export const cartActions = new CartActions();
