const {I} = inject();
module.exports = {  
    cookies: '#cookie-modal',
    okButton: '.cookie-agree__button.btn-green.js-coockie-agree',

    closedVodal() {
        I.see(this.cookies);
        I.click(this.okButton);
    }
}