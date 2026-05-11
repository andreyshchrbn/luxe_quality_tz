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
}
