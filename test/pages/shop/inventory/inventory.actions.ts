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

    async resetAppStateIfNotEmpty(): Promise<void> {
        const hasCartItems = await this.inventoryPage.cartBadge.isExisting();

        if (hasCartItems) {
            await this.inventoryPage.openMenuButton.click();
            await this.inventoryPage.resetAppStateLink.waitForDisplayed();
            await this.inventoryPage.resetAppStateLink.click();
            await this.inventoryPage.closeMenuButton.click();

            await expect(this.inventoryPage.cartBadge).not.toExist();
        }
    }

    async verifyEmptyCart(): Promise<void> {
        await expect(this.inventoryPage.cartBadge).not.toExist();
    }
}

export const inventoryActions = new InventoryActions();
