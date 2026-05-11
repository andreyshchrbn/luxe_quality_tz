export const verifyCurrentUrl = async (expectedUrl: string | RegExp): Promise<void> => {
    await expect(browser).toHaveUrl(expectedUrl);
};
