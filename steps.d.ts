/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type catalogPage = typeof import('./pages/catalog.js');
type cookiesPage = typeof import('./pages/cookies.js');
type productionPage = typeof import('./pages/production.js');
type brandPage = typeof import('./pages/brand.js');
type servicePage = typeof import('./pages/service.js');
type hrPage = typeof import('./pages/hr.js');
type mainPage = typeof import('./pages/main.js');
type supportPage = typeof import('./pages/support.js');
type cooperationPage = typeof import('./pages/cooperation.js');
type contactsPage = typeof import('./pages/contacts.js');
type newsPage = typeof import('./pages/news.js');
declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, catalogPage: catalogPage, cookiesPage: cookiesPage, productionPage: productionPage, brandPage: brandPage, servicePage: servicePage, hrPage: hrPage, mainPage: mainPage, supportPage: supportPage, cooperationPage: cooperationPage, contactsPage: contactsPage , newsPage: newsPage}
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
