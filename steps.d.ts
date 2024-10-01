/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginDataPage = typeof import('./data/loginData.js');
type loginPage = typeof import('./pages/login.js');
type cookiesPage = typeof import('./pages/cookies.js');
type openPersonalPage = typeof import('./pages/openPersonal.js');
type addProductPage = typeof import('./pages/addProduct.js');
type choiceServicesPage = typeof import('./pages/choiceServices.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginDataPage: loginDataPage, loginPage: loginPage, cookiesPage: cookiesPage, openPersonalPage: openPersonalPage, addProductPage: addProductPage, choiceServicesPage: choiceServicesPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
