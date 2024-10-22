const { I } = inject();

module.exports = {
  hrPage: 'a[href="/hr/"]',
  title: '[data-locator="heroBox__caption"]',
  linkKorp: 'a[href="/culture/"]',
  blockResume: '[data-locator="hr__resumeCaption"]',
  block: '[data-locator="title"]',
  blockUniver: '[data-locator="culture__universityTitle"]',
  blockHistory: '[data-locator="cultire__carouselTitle"]',

  infoPage() {
    I.click(this.hrPage);
    I.see('РАБОТА В КОМАНДЕ ПРОФЕССИОНАЛОВ', this.title);
    I.see('Станьте частью нашей команды', this.blockResume);
    I.click(this.linkKorp);
    I.see('Ценности компании', this.block);
    I.see('КОРПОРАТИВНЫЙ УНИВЕРСИТЕТ', this.blockUniver);
    I.see('Истории успеха', this.blockHistory);
  }
}
