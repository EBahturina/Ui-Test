/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginData = typeof import('./data/loginData.js');
type login = typeof import('./pages/login.js');
type cookies = typeof import('./pages/cookies.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginData: loginData, login: login, cookies: cookies }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
