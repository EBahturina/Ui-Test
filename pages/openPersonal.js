const { I } = inject();

module.exports = {
   personalLink: 'div.mn-func-ul__block a[href="/personal/"]',

   openPersonalLink() {
    I.click(this.personalLink)
   }
  // insert your locators and methods here
}
