const Page = require('./page.js');

class HomePage extends Page {
    get title() {
        return $('//android.widget.TextView[@text="WEBDRIVER"]');
    }

    get homeScreen() {
        return $('~Home-screen');
    }

    get content() {
        return $('id:android:id/content');
    }

    get image() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]');
    }

    get navHome() {
        return $('~Home');
    }

    get navWebviev() {
        return $('~Webview');
    }

    get navLogin() {
        return $('~Login');
    }

    get navSwipe() {
        return $('~Swipe');
    }

    get navForms() {
        return $('~Forms');
    }

    get navDrag() {
        return $('~Drag');
    }

}
module.exports = new HomePage();