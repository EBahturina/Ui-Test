const { I } = inject();

module.exports = {
  productPageInfo: '[href="/production/"]',
  title: '[data-locator="heroBox__caption"]',
  titleIZTT: 'a[href="/production/iztt/"] .someCard__caption',
  titleFilial: 'a[href="/production/filial-iztt/"] .someCard__caption',
  titleVentinzhmash: 'a[href="/production/ventinzhmash/"] .someCard__caption',
  titleBig: 'a[href="/production/big-climatic-manufacturer/"] .someCard__caption',
  titleRoyal: 'a[href="/production/royal-thermo-aluminum/"] .someCard__caption',
  titleRTS: 'a[href="/production/royal-thermo-steel/"] .someCard__caption',
  titleIksel: 'a[href="/iksel/"] .someCard__caption',
  titleI: '.heroBox h1',
  linkRD: 'a[href="/rnd/"]',
  titleSC: 'a[href="/rnd/sibercool/"] .someCard__caption',
  titleDL: 'a[href="/rnd/designlab/"] .someCard__caption',
  titleHL: 'a[href="/rnd/heatlab/"] .someCard__caption',
  block: '.heroBox .heroBox__body',
  infoPage() {
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('R&D И ПРОИЗВОДСТВО', this.title);
    I.see('Ижевский завод тепловой техники (ИЗТТ)', this.titleIZTT);
    I.click(this.titleIZTT);
    I.see('ИЖЕВСКИЙ ЗАВОД ТЕПЛОВОЙ ТЕХНИКИ', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('Производственный филиал Ижевского завода тепловой техники', this.titleFilial);
    I.click(this.titleFilial);
    I.see('ФИЛИАЛ ИЖЕВСКОГО ЗАВОДА ТЕПЛОВОЙ ТЕХНИКИ', this.titleI)
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('Производственное предприятие «ВЕНТИНЖМАШ»', this.titleVentinzhmash);
    I.click(this.titleVentinzhmash);
    I.see('ПРОИЗВОДСТВЕННОЕ ПРЕДПРИЯТИЕ «ВЕНТИНЖМАШ»', this.titleI)
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('BIG Climatic Manufacturer', this.titleBig);
    I.click(this.titleBig);
    I.see('BIG CLIMATIC MANUFACTURER', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('Завод алюминиевых и биметаллических радиаторов', this.titleRoyal);
    I.click(this.titleRoyal);
    I.see('ЗАВОД АЛЮМИНИЕВЫХ И БИМЕТАЛЛИЧЕСКИХ РАДИАТОРОВ', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('Завод стальных панельных радиаторов', this.titleRTS);
    I.click(this.titleRTS);
    I.see('ЗАВОД СТАЛЬНЫХ ПАНЕЛЬНЫХ РАДИАТОРОВ', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.see('Русклимат ИКСЭл', this.titleIksel);
    I.click(this.titleIksel);
    I.see('ТЕХНОПАРК «РУСКЛИМАТ ИКСЭЛ»', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.click(this.linkRD);
    I.see('Исследовательский центр SiberCool', this.titleSC);
    I.click(this.titleSC);
    I.see('ИНЖЕНЕРНО- ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.click(this.linkRD);
    I.see('Центр разработки промышленного дизайна DesignLab', this.titleDL);
    I.click(this.titleDL);
    I.see('ЦЕНТР ТЕХНОЛОГИЙ И ПРОМЫШЛЕННОГО ДИЗАЙНА', this.titleI);
    I.click(this.productPageInfo);
    I.click(this.block);
    I.click(this.linkRD);
    I.see('Лаборатория тепловой техники HeatLab', this.titleHL);
    I.click(this.titleHL);
    I.see('ЛАБОРАТОРИЯ ТЕПЛОВОЙ ТЕХНИКИ', this.titleI);
  
  }
}
