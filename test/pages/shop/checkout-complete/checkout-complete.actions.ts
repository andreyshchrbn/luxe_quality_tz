import { browser, expect } from '@wdio/globals';
import { CheckoutCompletePage } from './checkout-complete.page';
import { verifyCurrentUrl } from '../../../utils/url.utils';

export class CheckoutCompleteActions {
    private readonly checkoutCompletePage = new CheckoutCompletePage();

    async verifyOrderComplete(expectedMessage: string): Promise<void> {
        await expect(this.checkoutCompletePage.completeHeader).toHaveText(expectedMessage);
    }

    async returnToHome(inventoryUrl: string | RegExp): Promise<void> {
        await this.checkoutCompletePage.backHomeButton.click();
        await verifyCurrentUrl(inventoryUrl);
    }
}

export const checkoutCompleteActions = new CheckoutCompleteActions();
