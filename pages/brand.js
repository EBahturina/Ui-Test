const { I } = inject();

module.exports = {
  brandsPageInfo: '[href="/brands/"]',
  title: '[data-locator="heroBox__caption"]',
  titleblock: '[data-locator="textAnimation"]',
  brandLink: 'a[href="/brands/ballu/"]',
  brandLink_2: 'a[href="/brands/boneco/"]',
  brandLink_3: 'a[href="/brands/royal-thermo/"]',
  brandLink_4: 'a[href="/brands/shuft/"]',
  brandLink_5: 'a[href="/brands/ridan/"]',
  brandLink_6: 'a[href="/brands/rhoss/"]',
  brandLink_7: 'a[href="/brands/grundfos/"]',
  brandLink_8: 'a[href="/brands/hygromatik/"]',
  brandLink_9: 'a[href="/brands/weger/"]',
  brandLink_10: 'a[href="/brands/viessmann/"]',
  brandLink_11: 'a[href="/brands/toshiba/"]',
  brandLink_12: 'a[href="/brands/hajdu/"]',
  brandLink_13: 'a[href="/brands/evan/"]',
  brandLink_14: 'a[href="/brands/mizudo/"]',
  brandLink_15: 'a[href="/brands/carel/"]',
  brandLink_16: 'a[href="/brands/rehau/"]',
  brandLink_17: 'a[href="/brands/jeelex/"]',
  brandLink_18: 'a[href="/brands/buderus/"]',
  brandLink_19: 'a[href="/brands/atoll/"]',
  brandLink_20: 'a[href="/brands/aerial/"]',
  brandLink_21: 'a[href="/brands/de-dietrich/"]',
  brandLink_22: 'a[href="/brands/baxi/"]',
  brandLink_23: 'a[href="/brands/lemaks/"]',
  brandLink_24: 'a[href="/brands/navien/"]',
  brandLink_25: 'a[href="/brands/ac-electric/"]',
  brandLink_26: 'a[href="/brands/eca/"]',



   
  infoPage() {
    I.click(this.brandsPageInfo);
    I.see('70 ТОРГОВЫХ МАРОК В ПОРТФЕЛЕ БРЕНДОВ', this.title);
    I.see('ТПХ «Русклимат» – стратегический партнер ведущих мировых производителей', this.titleblock);
    I.click(this.brandLink);
    I.see('BALLU', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_2);
    I.see('BONECO', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_3);
    I.see('ROYAL-THERMO', this.title);
    I.click(this.brandsPageInfo); 
    I.click(this.brandLink_4);
    I.see('SHUFT', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_5);
    I.see('RIDAN', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_6);
    I.see('RHOSS', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_7);
    I.see('GRUNDFOS', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_8);
    I.see('HYGROMATIK', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_9);
    I.see('WEGER', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_10);
    I.see('VIESSMANN', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_11);
    I.see('TOSHIBA', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_12);
    I.see('HAJDU', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_13);
    I.see('EVAN', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_14);
    I.see('MIZUDO', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_15);
    I.see('CAREL', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_16);
    I.see('REHAU', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_17);
    I.see('JEELEX', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_18);
    I.see('BUDERUS', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_19);
    I.see('ATOLL', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_20);
    I.see('AERIAL', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_21);
    I.see('DE-DIETRICH', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_22);
    I.see('BAXI', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_23);
    I.see('LEMAKS', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_24);
    I.see('NAVIEN', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_25);
    I.see('AC-ELECTRIC', this.title);
    I.click(this.brandsPageInfo);
    I.click(this.brandLink_26);
    I.see('ECA', this.title);
    
  }
}
