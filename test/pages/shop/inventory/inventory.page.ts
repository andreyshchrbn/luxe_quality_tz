import { $ } from '@wdio/globals';
import { inventoryLocators } from './inventory.locators';

export class InventoryPage {
    get addToCartBikeLightButton() {
        return $(inventoryLocators.addToCartBikeLightButton);
    }

    get cartBadge() {
        return $(inventoryLocators.cartBadge);
    }

    get cartLink() {
        return $(inventoryLocators.cartLink);
    }

    get openMenuButton() {
        return $(inventoryLocators.openMenuButton);
    }

    get resetAppStateLink() {
        return $(inventoryLocators.resetAppStateLink);
    }

    get closeMenuButton() {
        return $(inventoryLocators.closeMenuButton);
    }
}
