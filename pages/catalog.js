const { I } = inject();

module.exports = {
  catalogPageInfo: '[href="/catalog/"]',
  title: '[data-locator="heroBox__caption"]',
  titleAutomation: 'a[href="/catalog/automation/#list"] span.cat__text',
  titleConsumables: 'a[href="/catalog/consumables/#list"] span.cat__text',
  titleVentilation: 'a[href="/catalog/ventilation/#list"] span.cat__text',
  titleWarmly: 'a[href="/catalog/warmly/#list"] span.cat__text',
  titleCondition: 'a[href="/catalog/condition/#list"] span.cat__text',
  titleMoistening: 'a[href="/catalog/moistening/#list"] span.cat__text',
  titleHeat: 'a[href="/catalog/heat/#list"] span.cat__text',
  titleElectronic: 'a[href="/catalog/electronic/#list"] span.cat__text',
  infoPage() {
    I.click(this.catalogPageInfo);
    I.see('БОЛЕЕ 350 000 НАИМЕНОВАНИЙ ПРОДУКЦИИ', this.title);
    I.see('Автоматизация и диспетчеризация зданий', this.titleAutomation);
    I.see('Расходные материалы, аксессуары и инструменты для ОВК', this.titleConsumables);
    I.see('Вентиляция и кондиционирование зданий', this.titleVentilation);
    I.see('Тепловое оборудование', this.titleWarmly);
    I.see('Кондиционирование', this.titleCondition);
    I.see('Увлажнение, осушение и очистка воздуха', this.titleMoistening);
    I.see('Отопление и водоснабжение', this.titleHeat);
    I.see('Электрика', this.titleElectronic);
} 
}
