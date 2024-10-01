const { I } = inject();

module.exports = {
   service: 'div.mn-func-ul__block a[href="/service/"]',
   montageService: 'div.srv-nav.c a[href="/service/montazh/"]',
   title: '.ttl-with-info h1',
   serviceCondishn: 'div.l a[href="/service/comfort/"]',
    
   serviceChoice() {
      I.click(this.service);
      I.click(this.montageService);
      I.click(this.serviceCondishn);
   }
}
