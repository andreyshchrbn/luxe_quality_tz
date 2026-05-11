import { CartPage } from './cart.page';

export class CartActions {
    private readonly cartPage = new CartPage();

    async verifyCartContent(expectedProductName: string): Promise<void> {
        await expect(this.cartPage.pageTitle).toHaveText('Your Cart');
        await expect(this.cartPage.cartItemName).toHaveText(expectedProductName);
    }

    async verifyCartIsEmpty(): Promise<void> {
        const cartItems = await this.cartPage.cartItems;

        await expect(this.cartPage.pageTitle).toHaveText('Your Cart');
        expect(cartItems.length).toBe(0);
    }

    async proceedToCheckout(): Promise<void> {
        await this.cartPage.checkoutButton.click();
    }

    async verifyEmptyCartMessage(expectedMessage: string): Promise<void> {
        await expect(this.cartPage.emptyCartMessage).toHaveText(expectedMessage);
    }
}

export const cartActions = new CartActions();
