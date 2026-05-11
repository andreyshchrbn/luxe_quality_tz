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

    get activeSortOption() {
        return $(inventoryLocators.activeSortOption);
    }

    get sortSelect() {
        return $(inventoryLocators.sortSelect);
    }

    get inventoryItemPrices() {
        return $$(inventoryLocators.inventoryItemPrices);
    }
}
