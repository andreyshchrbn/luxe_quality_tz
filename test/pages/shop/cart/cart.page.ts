import { cartLocators } from './cart.locators';

export class CartPage {
    get pageTitle() {
        return $(cartLocators.pageTitle);
    }

    get cartItemName() {
        return $(cartLocators.cartItemName);
    }

    get cartItems() {
        return $$(cartLocators.cartItems);
    }

    get checkoutButton() {
        return $(cartLocators.checkoutButton);
    }

    get emptyCartMessage() {
        return $(cartLocators.emptyCartMessage);
    }
}
