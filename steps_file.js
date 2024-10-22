
const BASE_URL = 'https://www.rusklimat.com';
module.exports = function() {
    return actor({
  
      openSite() {
          this.amOnPage(BASE_URL);
          
      }
  
    });
  }