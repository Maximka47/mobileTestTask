class Page {

    async waitForElement(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    async tap(element) {
        await this.waitForElement(element);
        await element.click();
    }

    async typeText(element, text) {
        await this.waitForElement(element);
        await element.setValue(text);
    }

    async getText(element) {
        await this.waitForElement(element);
        return await element.getText();
    }

    async isVisible(element) {
        return await element.isDisplayed();
    }

    async scrollToElement(element) {
        await browser.execute('mobile: scroll', { element: element.elementId, toVisible: true });
    }
}
module.exports = Page;