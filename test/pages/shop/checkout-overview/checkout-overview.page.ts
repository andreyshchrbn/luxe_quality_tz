import { checkoutOverviewLocators } from './checkout-overview.locators';

export class CheckoutOverviewPage {
    get summarySubtotal() {
        return $(checkoutOverviewLocators.summarySubtotal);
    }

    get finishButton() {
        return $(checkoutOverviewLocators.finishButton);
    }
}
