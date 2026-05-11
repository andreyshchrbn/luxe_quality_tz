import { sidebarActions } from '../components/sidebar/sidebar.actions';
import { SidebarPage } from '../components/sidebar/sidebar.page';

const sidebarPage = new SidebarPage();

export const resetAppState = async (): Promise<void> => {
    await sidebarActions.openMenu();
    await sidebarPage.resetAppStateLink.waitForDisplayed();
    await sidebarPage.resetAppStateLink.click();
    await sidebarPage.closeMenuButton.waitForClickable();
    await sidebarPage.closeMenuButton.click();
};
