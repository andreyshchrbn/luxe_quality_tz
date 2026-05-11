import { sidebarActions } from '../components/sidebar/sidebar.actions';
import { loginToInventory } from '../utils/auth.utils';
import { loginActions } from '../pages/login/login.actions';

describe('Sidebar Menu Flows', () => {
    beforeEach(async () => {
        await loginToInventory();
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
