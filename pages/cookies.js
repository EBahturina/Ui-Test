const {I} = inject();
module.exports = {  
    okButton: '.cookie-agree__button.btn-green.js-coockie-agree',
    header: '.header',

    closedModal() {
        I.waitForElement(this.header);
        I.click(this.okButton);
    }
}