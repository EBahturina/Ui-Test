const { I } = inject();

module.exports = {
  newsPage: 'a[href="/news/"]',
  title: '[data-locator="heroBox__caption"]',
  titleNews: '[data-locator="news__title"]',
  titleNewsId: '[data-locator="news__desc"]',

  infoPage() {
    I.click(this.newsPage);
    I.see('НОВОСТИ ТПХ «РУСКЛИМАТ', this.title);
    I.see('Новости Холдинга', this.titleNews);
    I.see('Анонсы новых продуктов, отчеты о выставках и мероприятиях, новости филиальной сети, производственных предприятий, события в индустрии HVAC', this.titleNewsId)
  }


}
