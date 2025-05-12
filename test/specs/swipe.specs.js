const SwipePage = require('../pages/swipe.page.js');

describe('Swipe Test Suite', () => {
    it('should show the correct elements in swipe page', async () => {
        await SwipePage.openSwipePage();
        await browser.pause(2000);
        await expect(SwipePage.carousel).toBeDisplayed();
        await expect(SwipePage.ghCard).toBeDisplayed();
        await SwipePage.swipeLeft(550, 1600, 0, 1600);
        await expect(SwipePage.commCard).toBeDisplayed();
        await SwipePage.swipeLeft(550, 1600, 0, 1600);
        await expect(SwipePage.jsCard).toBeDisplayed();
    });
    it('should scroll down the page', async () => {
        await SwipePage.scrollUntilVisible(SwipePage.secretMessage,10,300);
        await expect(SwipePage.secretLogo).toBeDisplayed();
        await expect(SwipePage.secretMessage).toBeDisplayed();
    });
});