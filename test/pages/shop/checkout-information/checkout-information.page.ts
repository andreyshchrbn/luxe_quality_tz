import { $ } from '@wdio/globals';
import { checkoutInformationLocators } from './checkout-information.locators';

export class CheckoutInformationPage {
    get pageTitle() {
        return $(checkoutInformationLocators.pageTitle);
    }

    get firstNameInput() {
        return $(checkoutInformationLocators.firstNameInput);
    }

    get lastNameInput() {
        return $(checkoutInformationLocators.lastNameInput);
    }

    get postalCodeInput() {
        return $(checkoutInformationLocators.postalCodeInput);
    }

    get continueButton() {
        return $(checkoutInformationLocators.continueButton);
    }
}
