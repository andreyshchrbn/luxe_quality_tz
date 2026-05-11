import { CheckoutOverviewPage } from './checkout-overview.page';
import { verifyCurrentUrl } from '../../../utils/url.utils';

export class CheckoutOverviewActions {
    private readonly checkoutOverviewPage = new CheckoutOverviewPage();

    async verifyOverviewPrice(expectedPrice: string): Promise<void> {
        await expect(this.checkoutOverviewPage.summarySubtotal).toHaveText(
            expect.stringContaining(expectedPrice),
        );
    }

    async finishOrder(expectedUrl: string | RegExp): Promise<void> {
        await this.checkoutOverviewPage.finishButton.click();
        await verifyCurrentUrl(expectedUrl);
    }
}

export const checkoutOverviewActions = new CheckoutOverviewActions();
