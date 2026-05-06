import { browser, expect } from '@wdio/globals';
import { CheckoutInformationPage } from './checkout-information.page';
import { verifyCurrentUrl } from '../../../utils/url.utils';

export class CheckoutInformationActions {
    private readonly checkoutInformationPage = new CheckoutInformationPage();

    async verifyLoaded(expectedUrl: string | RegExp, expectedTitle: string): Promise<void> {
        await verifyCurrentUrl(expectedUrl);
        await expect(this.checkoutInformationPage.pageTitle).toHaveText(expectedTitle);
        await expect(this.checkoutInformationPage.firstNameInput).toBeDisplayed();
        await expect(this.checkoutInformationPage.lastNameInput).toBeDisplayed();
        await expect(this.checkoutInformationPage.postalCodeInput).toBeDisplayed();
    }

    async fillCheckoutForm(data: {
        firstName: string;
        lastName: string;
        postalCode: string;
    }): Promise<void> {
        await this.checkoutInformationPage.firstNameInput.setValue(data.firstName);
        await this.checkoutInformationPage.lastNameInput.setValue(data.lastName);
        await this.checkoutInformationPage.postalCodeInput.setValue(data.postalCode);

        await expect(this.checkoutInformationPage.firstNameInput).toHaveValue(data.firstName);
        await expect(this.checkoutInformationPage.lastNameInput).toHaveValue(data.lastName);
        await expect(this.checkoutInformationPage.postalCodeInput).toHaveValue(data.postalCode);
    }

    async continueCheckout(expectedUrl: string | RegExp): Promise<void> {
        await this.checkoutInformationPage.continueButton.click();
        await verifyCurrentUrl(expectedUrl);
    }
}

export const checkoutInformationActions = new CheckoutInformationActions();
