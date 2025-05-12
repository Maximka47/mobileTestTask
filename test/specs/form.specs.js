const FormPage = require('../pages/form.page.js');

describe('Form Test Suite', () => {
    it('should show the correct elements in form page', async () => {
        await FormPage.openFormPage();
        await browser.pause(2000);
        await expect(FormPage.formScreen).toBeDisplayed();
        await expect(FormPage.inputField).toBeDisplayed();
        await expect(FormPage.switch).toBeDisplayed();
        await expect(FormPage.dropdown).toBeDisplayed();
    });
    it ('should click on the switch and have correct response', async () => {
        await FormPage.openFormPage();
        await browser.pause(2000);
        await expect(FormPage.switchText).toHaveText('Click to turn the switch ON');
        await FormPage.switch.click();
        await expect(FormPage.switchText).toHaveText('Click to turn the switch OFF');
    });
})