import { browser, expect } from '@wdio/globals';
import { LoginPage } from './login.page';
import { verifyCurrentUrl } from '../../utils/url.utils';

export class LoginActions {
    private readonly loginPage = new LoginPage();

    async openPage(): Promise<void> {
        await browser.url('/');
    }

    async loginAs(user: { username: string; password: string }): Promise<void> {
        await this.enterUsername(user.username);
        await this.enterPassword(user.password);
        await this.clickLogin();
    }

    private async enterUsername(username: string): Promise<void> {
        await this.loginPage.userNameInput.setValue(username);
    }

    private async enterPassword(password: string): Promise<void> {
        await this.loginPage.passwordInput.setValue(password);
    }

    private async clickLogin(): Promise<void> {
        await this.loginPage.loginButton.click();
    }

    async verifyPasswordIsMasked(): Promise<void> {
        await expect(this.loginPage.passwordInput).toHaveAttribute('type', 'password');
    }

    async verifyUsernameErrorIconIsVisible(): Promise<void> {
        await expect(this.loginPage.usernameErrorIcon).toBeDisplayed();
    }

    async verifyPasswordErrorIconIsVisible(): Promise<void> {
        await expect(this.loginPage.passwordErrorIcon).toBeDisplayed();
    }

    async verifyLoginSuccess(expectedUrl: string | RegExp): Promise<void> {
        await verifyCurrentUrl(expectedUrl);
    }

    async verifyErrorMessageText(expectedText: string): Promise<void> {
        await this.loginPage.errorMessage.waitForDisplayed();
        await expect(this.loginPage.errorMessage).toHaveText(expectedText);
    }

    async verifyUsernameInputHasErrorStyle(): Promise<void> {
        await expect(this.loginPage.userNameInput).toHaveElementClass('input_error');
    }

    async verifyPasswordInputHasErrorStyle(): Promise<void> {
        await expect(this.loginPage.passwordInput).toHaveElementClass('input_error');
    }
}

export const loginActions = new LoginActions();
