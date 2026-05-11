import { sidebarActions } from '../components/sidebar/sidebar.actions';
import { testRuntimeConfig } from '../config/env';
import { loginActions } from '../pages/login/login.actions';

describe('Sidebar Menu Flows', () => {
    beforeEach(async () => {
        await loginActions.openPage();
        await loginActions.loginAs(testRuntimeConfig.users.validUser);
        await loginActions.verifyLoginSuccess(/.*inventory.html/);
    });

    it('TC-4: Logout', async () => {
        await sidebarActions.openMenu();
        await sidebarActions.verifyMenuItems([
            'All Items',
            'About',
            'Logout',
            'Reset App State',
        ]);
        await sidebarActions.logout(/.*\/$/);

        await loginActions.verifyLoginFormIsEmpty();
    });
});
