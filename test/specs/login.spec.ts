import { loginActions } from '../pages/login/login.actions';
import usersData from '../data/users.json';

describe('Authentication Flows', () => {
    beforeEach(async () => {
        await loginActions.openPage();
    });

    it('TC-1: Valid login', async () => {
        await loginActions.loginAs(usersData.valid_user);
        await loginActions.verifyLoginSuccess(/.*inventory.html/);
    });

    it('TC-2: Login with invalid password', async () => {
        await loginActions.loginAs(usersData.invalid_user);
        await loginActions.verifyPasswordIsMasked();

        await loginActions.verifyUsernameInputHasErrorStyle();
        await loginActions.verifyPasswordInputHasErrorStyle();

        await loginActions.verifyUsernameErrorIconIsVisible();
        await loginActions.verifyPasswordErrorIconIsVisible();

        await loginActions.verifyErrorMessageText(
            'Epic sadface: Username and password do not match any user in this service'
        );
    });

    it('TC-3: Login with locked out test login', async () => {
        await loginActions.loginAs(usersData.locked_user);
        await loginActions.verifyPasswordIsMasked();

        await loginActions.verifyUsernameInputHasErrorStyle();
        await loginActions.verifyPasswordInputHasErrorStyle();

        await loginActions.verifyUsernameErrorIconIsVisible();
        await loginActions.verifyPasswordErrorIconIsVisible();

        await loginActions.verifyErrorMessageText(
            'Epic sadface: Sorry, this user has been locked out.',
        );
    });
});
