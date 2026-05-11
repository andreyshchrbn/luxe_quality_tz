import { sidebarLocators } from './sidebar.locators';

export class SidebarPage {
    get openMenuButton() {
        return $(sidebarLocators.openMenuButton);
    }

    get sidebarMenuLinks() {
        return $$(sidebarLocators.sidebarMenuLinks);
    }

    get logoutLink() {
        return $(sidebarLocators.logoutLink);
    }

    get resetAppStateLink() {
        return $(sidebarLocators.resetAppStateLink);
    }

    get closeMenuButton() {
        return $(sidebarLocators.closeMenuButton);
    }
}
