

Feature('exploring');

Scenario('failAvtorization',  ({ I, loginPage, loginDataPage, cookiesPage, openPersonalPage}) => {
    I.openSite();
    cookiesPage.closedModal();
    openPersonalPage.openPersonalLink();
    loginPage.fillLogin(loginDataPage.falseUser);
    loginPage.tryLogin();
    I.see('Неверный логин или пароль.', loginPage.errorMessage);

});

Scenario('emptyNameAvtorization',  ({ I, loginPage, loginDataPage, cookiesPage, openPersonalPage}) => {
    I.openSite();
    cookiesPage.closedModal();
    openPersonalPage.openPersonalLink();
    loginPage.fillLogin(loginDataPage.emptyNameUser);
    loginPage.tryLogin();
    I.see('Неверный логин или пароль.', loginPage.errorMessage);
   
});

Scenario('emptyPasswordAvtorization',  ({ I, loginPage, loginDataPage, cookiesPage, openPersonalPage}) => {
    I.openSite();
    cookiesPage.closedModal();
    openPersonalPage.openPersonalLink();
    loginPage.fillLogin(loginDataPage.emptyPasswordUser);
    loginPage.tryLogin();
    I.see('Неверный логин или пароль.', loginPage.errorMessage);
    
});
Scenario('addProductInCart',  ({ I, cookiesPage, addProductPage}) => {
    I.openSite();
    cookiesPage.closedModal();
    addProductPage.addProduct();
    I.see('ОФОРМЛЕНИЕ ЗАКАЗА', addProductPage.title); 
});

Scenario('choiceService',  ({ I, cookiesPage, choiceServicesPage}) => {
    I.openSite();
    cookiesPage.closedModal();
    choiceServicesPage.serviceChoice();
    I.see('БЫТОВОЕ И ПОЛУПРОМЫШЛЕННОЕ КОНДИЦИОНИРОВАНИЕ', choiceServicesPage.title); 
});