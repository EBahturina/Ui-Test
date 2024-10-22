const { I } = inject();

module.exports = {
  cooperationPageInfo: '[href="/cooperation/"]',
  title: '[data-locator="heroBox__caption"]',
  title_1: '[data-locator="cooperation__tabsButton__international"]',
  title_2: '[data-locator="cooperation__tabsButton__internal"]',
  staffLink: '[data-locator="navBox__staff__link"]',
  wareHouseLink: '[data-locator="navBox__warehouse__link"]',
  consublesLink: '[data-locator="navBox__consumables__link"]',
  coxLink: '[data-locator="navBox__cox__link"]',
  staffTitle: '[data-locator="cooperation__tabsButton__staff"]',
  wareHouseTitle: '[data-locator="cooperation__tabsButton__warehouse"]',
  consublesTitle: '[data-locator="cooperation__tabsButton__consumables"]',
  coxTitle: '[data-locator="cooperation__tabsButton__cox"]',

  infoPage() {
    I.click(this.cooperationPageInfo);
    I.see('ТПХ «РУСКЛИМАТ» - ЛИДЕР В ОБЛАСТИ ПОСТАВОК КЛИМАТИЧЕСКИХ СИСТЕМ', this.title);
    I.see('Международные перевозки', this.title_1);
    I.see('Внутрироссийские перевозки', this.title_2);
    I.click(this.staffLink);
    I.see('Персонал', this.staffTitle);
    I.click(this.wareHouseLink);
    I.see('Складская техника', this.wareHouseTitle);
    I.click(this.consublesLink);
    I.see('Закупка расходных материалов для склада', this.consublesTitle);
    I.click(this.coxLink);
    I.see('Аренда склада / СОХ', this.coxTitle);
  }
}
