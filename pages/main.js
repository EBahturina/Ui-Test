const { I } = inject();

module.exports = {
  title: '[data-locator="heroBox__caption"]',
  blockAbout: '[data-locator="depiction__indexAbout__label"]',
  blockIndexRnd: '[data-locator="depiction__indexRnd__label"]',
  blockProd: '[data-locator="prodBox__label"]',
  blockLogistic: '[data-locator="depiction__indexLogistics__label"]',
  blockDistribution: '[data-locator="depiction__indexDistribution__label"]',
  blockBrends: '[data-locator="depiction__indexBrands__label"]',
  blockService: '[data-locator="depiction__indexService__label"]',

  infoPage() {
    I.see('МЕНЯЕМ КЛИМАТ В СТРАНЕ', this.title);
    I.see('О ХОЛДИНГЕ', this.blockAbout);
    I.see('РАЗРАБОТКА И R&D', this.blockIndexRnd);
    I.see('ПРОИЗВОДСТВО', this.blockProd);
    I.see('ЛОГИСТИКА', this.blockLogistic);
    I.see('ДИСТРИБУЦИЯ', this.blockDistribution);
    I.see('БРЕНДЫ', this.blockBrends);
    I.see('СЕРВИС', this.blockService);
  }
}
