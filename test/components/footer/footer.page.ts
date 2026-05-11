import { footerLocators } from './footer.locators';

export class FooterPage {
    get twitterLink() {
        return $(footerLocators.twitterLink);
    }

    get facebookLink() {
        return $(footerLocators.facebookLink);
    }

    get linkedinLink() {
        return $(footerLocators.linkedinLink);
    }
}
