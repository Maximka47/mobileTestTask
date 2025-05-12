const Page = require('./page.js');

class FormPage extends Page {
    get formScreen() {
        return $('~Forms-screen');
    }

    get navForms() {
        return $('~Forms');
    }

    get inputField() {
        return $('~text-input');
    }

    get switch() {
        return $('~switch');
    }

    get switchText() {
        return $('~switch-text');
    }

    get dropdown() {
        return $('~Dropdown');
    }

    async openFormPage() {
        await this.navForms.click();
    }
}
module.exports = new FormPage();