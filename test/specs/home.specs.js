const HomePage = require('../pages/home.page.js');
describe('Home Test Suite', () => {

    it('should show the correct elements in home page', async () => {
        await expect(HomePage.content).toBeDisplayed();
        await expect(HomePage.homeScreen).toBeDisplayed();
        await expect(HomePage.title).toBeDisplayed();
        await expect(HomePage.title).toHaveText('WEBDRIVER');
        await expect(HomePage.image).toBeDisplayed();
    });

    it('should show the correct buttons in navigation bar', async () => {
        await expect(HomePage.navHome).toBeDisplayed();
        await expect(HomePage.navWebviev).toBeDisplayed();
        await expect(HomePage.navLogin).toBeDisplayed();
        await expect(HomePage.navSwipe).toBeDisplayed();
        await expect(HomePage.navForms).toBeDisplayed();
        await expect(HomePage.navDrag).toBeDisplayed();
    });
});