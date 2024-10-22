const { I } = inject();

module.exports = {
  contactsPage: 'a[href="/contacts/"]',
  title: '[data-locator="heroBox__caption"]',
  title_2: '[data-locator="infoBox__title"]',
  servLink: '[href="/service/list/"]',
 
  infoPage() {
    I.click(this.contactsPage);
    I.see('МЫ ВСЕГДА РАДЫ СОТРУДНИЧЕСТВУ', this.title);
    I.see('Центральный офис:', this.title_2);
    I.click(this.servLink);
    I.see('Круглосуточный телефон горячей линии: 8 (800) 500-07-75', this.title_2);
  }
}
