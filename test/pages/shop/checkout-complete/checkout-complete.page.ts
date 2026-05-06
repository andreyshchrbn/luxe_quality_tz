import { $ } from '@wdio/globals';
import { checkoutCompleteLocators } from './checkout-complete.locators';

export class CheckoutCompletePage {
    get completeHeader() {
        return $(checkoutCompleteLocators.completeHeader);
    }

    get backHomeButton() {
        return $(checkoutCompleteLocators.backHomeButton);
    }
}
