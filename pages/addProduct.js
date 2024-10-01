const { I } = inject();

module.exports = {
  product: '.product-card__cover a[href="/product-_ballu_bso_07hn8_22y_/"]',
  button: '.btn.ctrl-restyled__buy-btn.btn-to-bsk',
  modalPopUp: '#popFastCart .w',
  goToTheRegistrationButton: '.btn.fc-button.fc-to-cart',
  title: '#order_make_page h1',

  addProduct() {
    I.click(this.product);
    I.click(this.button);
    I.waitForElement(this.modalPopUp);
    I.click(this.goToTheRegistrationButton);
  }
  
}
