

Feature('exploring');
Scenario('Главная страница',  ({ I,cookiesPage, mainPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    mainPage.infoPage();
});

Scenario('Страница Каталога',  ({ I,cookiesPage, catalogPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    catalogPage.infoPage();
});

Scenario('Страница Производство',  ({ I,cookiesPage, productionPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    productionPage.infoPage();
});

Scenario('Страница Бренды',  ({ I,cookiesPage, brandPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    brandPage.infoPage();
});

Scenario('Страница Сервис',  ({ I,cookiesPage, servicePage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    servicePage.infoPage();
});

Scenario('Страница Карьера',  ({ I,cookiesPage, hrPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    hrPage.infoPage();
});

Scenario('Страница Поддержка',  ({ I,cookiesPage, supportPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    supportPage.infoPage();
});

Scenario('Страница Сотрудничество',  ({ I,cookiesPage, cooperationPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    cooperationPage.infoPage();
});

Scenario('Страница Контакты',  ({ I,cookiesPage, contactsPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    contactsPage.infoPage();
});

Scenario('Страница Новости',  ({ I,cookiesPage, newsPage}) => {
    I.openSite();
    I.waitForClickable(cookiesPage.okButton);
    cookiesPage.closedModal();
    newsPage.infoPage();
});



