import { $ } from '@wdio/globals';
import { cartLocators } from './cart.locators';

export class CartPage {
    get pageTitle() {
        return $(cartLocators.pageTitle);
    }

    get cartItemName() {
        return $(cartLocators.cartItemName);
    }

    get checkoutButton() {
        return $(cartLocators.checkoutButton);
    }
}
