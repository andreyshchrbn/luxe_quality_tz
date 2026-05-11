import { loginLocators } from './login.locators';

export class LoginPage {
    get userNameInput() {
        return $(loginLocators.userNameInput);
    }

    get passwordInput() {
        return $(loginLocators.passwordInput);
    }

    get loginButton() {
        return $(loginLocators.loginButton);
    }

    get errorMessage() {
        return $(loginLocators.errorMessage);
    }

    get usernameErrorIcon() {
        return $(loginLocators.usernameErrorIcon);
    }

    get passwordErrorIcon() {
        return $(loginLocators.passwordErrorIcon);
    }
}
