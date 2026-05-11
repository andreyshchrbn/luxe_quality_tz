import { verifyCurrentUrl } from '../../utils/url.utils';
import { SidebarPage } from './sidebar.page';

export class SidebarActions {
    private readonly sidebarPage = new SidebarPage();

    async openMenu(): Promise<void> {
        await this.sidebarPage.openMenuButton.click();
        await this.sidebarPage.logoutLink.waitForDisplayed();
    }

    async verifyMenuItems(expectedLabels: string[]): Promise<void> {
        const menuItems = await this.sidebarPage.sidebarMenuLinks;
        const menuItemTexts = await menuItems.map((menuItem) => menuItem.getText());

        expect(menuItems.length).toBe(expectedLabels.length);
        expect(menuItemTexts).toEqual(expectedLabels);
    }

    async logout(expectedUrl: string | RegExp): Promise<void> {
        await this.sidebarPage.logoutLink.click();
        await verifyCurrentUrl(expectedUrl);
    }

    async resetAppState(): Promise<void> {
        await this.openMenu();
        await this.sidebarPage.resetAppStateLink.waitForDisplayed();
        await this.sidebarPage.resetAppStateLink.click();
        await this.sidebarPage.closeMenuButton.waitForClickable();
        await this.sidebarPage.closeMenuButton.click();
    }
}

export const sidebarActions = new SidebarActions();
