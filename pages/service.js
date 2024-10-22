const { I } = inject();

module.exports = {
  servicePage: '[href="/service/"]',
  title: '[data-locator="heroBox__caption"]',
  linkServProm: 'a[href="/service/industry/"]',
  linkServHouseHold: 'a[href="/service/household/"]',

  infoPage() {
    I.click(this.servicePage);
    I.see('Решим любые сложные задачи на любых расстояниях!', this.title);
    I.click(this.linkServProm);
    I.see('Сервис промышленного вентиляционного и холодильного оборудования', this.title);
    I.click(this.servicePage);
    I.click(this.linkServHouseHold);
    I.see('РАЗВИТАЯ СЕТЬ АВТОРИЗОВАННЫХ СЕРВИСНЫХ ЦЕНТРОВ', this.title);
  }
}
