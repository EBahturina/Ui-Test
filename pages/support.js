const { I } = inject();

module.exports = {
  supportPage: '[href="/support/"]',
  title: '[data-locator="heroBox__caption"]',
  blockService: '[data-locator="title"]',
  block: '[data-locator="supportSn__title"]',
  blockFormSection: '[data-locator="supportSn__formSection__title"]',

  infoPage() {
    I.click(this.supportPage);
    I.see('Центр поддержки проектирования', this.title);
    I.see('Наши сервисы', this.blockService);
    I.see('Преимущества работы с нами', this.block);
    I.see('Горячая линия', this.blockFormSection);
  }
}
