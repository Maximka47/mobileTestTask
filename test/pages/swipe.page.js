const Page = require('./page.js');

class SwipePage extends Page {
    get scrollableScreen() {
        return $('~Swipe-screen');
    }
    get navSwipe() {
        return $('~Swipe');
    }
    get carousel() {
        return $('~Carousel');
    }
    get swipeCarousel() {
        return $('//android.widget.HorizontalScrollView');
    }

    get ghCard() {
        return $('(//android.view.ViewGroup[@content-desc="card"])[1]');
    }
    get commCard() {
        return $('(//android.view.ViewGroup[@content-desc="card"])[2]');
    }
    get jsCard() {
        return $('(//android.view.ViewGroup[@content-desc="card"])[3]');
    }

    get secretLogo() {
        return $('~WebdriverIO logo');
    }

    get secretMessage() {
        return $('android=new UiSelector().text("You found me!!!")');
    }

    async openSwipePage() {
        await this.navSwipe.click();
    }

    async swipeLeft(startX, startY, endX, endY, duration = 500) {
        // Input validation (optional, but recommended for robustness)
        if (typeof startX !== 'number' || typeof startY !== 'number' ||
            typeof endX !== 'number' || typeof endY !== 'number') {
          throw new Error('startX, startY, endX, and endY must be numbers');
        }
        if (typeof duration !== 'number' || duration < 0) {
          throw new Error('duration must be a non-negative number');
        }
      
        // Perform the touchAction to simulate the horizontal scroll
        await browser.touchAction([
          { action: 'press', x: startX, y: startY },
          { action: 'wait', ms: duration }, // Add a wait action for smoother swipe
          { action: 'moveTo', x: endX, y: endY },
          { action: 'release' }
        ]);
    }

    async scrollUntilVisible(elOrSelector, maxSwipes = 10, duration = 500) {
        // resolve selector → element
        let el;
        if (typeof elOrSelector === 'string') {
            el = await $(elOrSelector);
        } else if (elOrSelector && typeof elOrSelector.then === 'function') {
            el = await elOrSelector;
        } else {
            el = elOrSelector;
        }
    
        let attempts = 0;
        while (attempts < maxSwipes) {
            if (await el.isDisplayed()) {
                return;
            }
            // perform swipe up…
            const { width, height } = await browser.getWindowRect();
            const startX = Math.floor(width / 2);
            const startY = Math.floor(height * 0.8);
            const endY   = Math.floor(height * 0.2);
    
            await browser.touchAction([
                { action: 'press', x: startX, y: startY },
                { action: 'wait',  ms: duration },
                { action: 'moveTo', x: startX, y: endY },
                'release'
            ]);
            attempts++;
        }
    
        // Build a friendly identifier for the element:
        const id = typeof elOrSelector === 'string'
            ? elOrSelector
            : (el.selector || el.elementId || '<unknown selector>');
    
        throw new Error(`Element "${id}" not visible after ${maxSwipes} swipes`);
    }

}

module.exports = new SwipePage();