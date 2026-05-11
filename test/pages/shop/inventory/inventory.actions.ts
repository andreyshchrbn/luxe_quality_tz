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

    async sortByPriceLowToHigh(): Promise<void> {
        await this.inventoryPage.sortSelect.selectByAttribute('value', 'lohi');
    }

    async verifySelectedSortOption(expectedOption: string): Promise<void> {
        await expect(this.inventoryPage.activeSortOption).toHaveText(expectedOption);
    }

    async verifyProductsAreSortedByPriceLowToHigh(): Promise<void> {
        const priceElements = await this.inventoryPage.inventoryItemPrices;
        const prices = await priceElements.map(async (priceElement) => {
            const rawPrice = await priceElement.getText();

            return Number(rawPrice.replace('$', ''));
        });
        const sortedPrices = [...prices].sort((left, right) => left - right);

        expect(prices).toEqual(sortedPrices);
    }

    async verifyEmptyCart(): Promise<void> {
        await expect(this.inventoryPage.cartBadge).not.toExist();
    }
}

export const inventoryActions = new InventoryActions();
