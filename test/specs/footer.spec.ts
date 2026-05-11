import { footerActions } from '../components/footer/footer.actions';
import { loginToInventory } from '../utils/auth.utils';

describe('Footer Flow', () => {
    beforeEach(async () => {
        await loginToInventory();
    });

    it('TC-7: Footer Links', async () => {
        await footerActions.openTwitterAndVerifyNewTab();
        await footerActions.openFacebookAndVerifyNewTab();
        await footerActions.openLinkedinAndVerifyNewTab();
    });
});
