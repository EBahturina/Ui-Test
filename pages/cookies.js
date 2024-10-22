const {I} = inject();

module.exports = {  
    okButton: '[data-locator="cookieNotify__ok"]',
    cookiesSection: 'div[data-locator="cookieNotify"]',

    closedModal() {
        I.waitForElement(this.cookiesSection);
        I.click(this.okButton);
    }
}