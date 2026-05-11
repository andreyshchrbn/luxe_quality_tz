import { testRuntimeConfig } from '../config/env';
import { loginActions } from '../pages/login/login.actions';

export const loginToInventory = async (
    user = testRuntimeConfig.users.validUser,
): Promise<void> => {
    await loginActions.openPage();
    await loginActions.loginAs(user);
    await loginActions.verifyLoginSuccess(/.*inventory.html/);
};
