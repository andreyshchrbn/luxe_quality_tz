import { InventoryPage } from './inventory.page';

export class InventoryActions {
    private readonly inventoryPage = new InventoryPage();

    async addBikeLightToCart(): Promise<void> {
        await this.inventoryPage.addToCartBikeLightButton.click();
    }

    async verifyCartCounter(expectedCount: string): Promise<void> {
        await expect(this.inventoryPage.cartBadge).toBeDisplayed();
        await expect(this.inventoryPage.cartBadge).toHaveText(expectedCount);
    }

    async openCart(): Promise<void> {
        await this.inventoryPage.cartLink.click();
    }

    async verifyEmptyCart(): Promise<void> {
        await expect(this.inventoryPage.cartBadge).not.toExist();
    }
}

export const inventoryActions = new InventoryActions();
