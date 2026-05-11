import { FooterPage } from './footer.page';

export class FooterActions {
    private readonly footerPage = new FooterPage();

    async openTwitterAndVerifyNewTab(): Promise<void> {
        await this.openSocialLinkAndVerifyNewTab(
            this.footerPage.twitterLink,
            /(twitter|x)\.com\/saucelabs/i,
        );
    }

    async openFacebookAndVerifyNewTab(): Promise<void> {
        await this.openSocialLinkAndVerifyNewTab(
            this.footerPage.facebookLink,
            /facebook\.com\/saucelabs/i,
        );
    }

    async openLinkedinAndVerifyNewTab(): Promise<void> {
        await this.openSocialLinkAndVerifyNewTab(
            this.footerPage.linkedinLink,
            /linkedin\.com\/company\/sauce-labs/i,
        );
    }

    private async openSocialLinkAndVerifyNewTab(
        linkElement: ReturnType<typeof $>,
        expectedOpenedUrl: RegExp,
    ): Promise<void> {
        const mainWindowHandle = await browser.getWindowHandle();
        const existingWindowHandles = await browser.getWindowHandles();

        await linkElement.scrollIntoView();
        await linkElement.click();

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === existingWindowHandles.length + 1,
            {
                timeout: 10000,
                timeoutMsg: 'Expected footer link to open a new browser tab.',
            },
        );

        const updatedWindowHandles = await browser.getWindowHandles();
        const newWindowHandle = updatedWindowHandles.find(
            (windowHandle) => !existingWindowHandles.includes(windowHandle),
        );

        if (!newWindowHandle) {
            throw new Error('New browser tab was not found after clicking the footer link.');
        }

        await browser.switchToWindow(newWindowHandle);
        await expect(browser).toHaveUrl(expectedOpenedUrl);
        await browser.closeWindow();
        await browser.switchToWindow(mainWindowHandle);
    }
}

export const footerActions = new FooterActions();
