const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForTimeout: 10000,
      windowSize: '1900*800'
    }
  },
  include: {
    I: './steps_file.js',
    catalogPage: "./pages/catalog.js",
    cookiesPage: "./pages/cookies.js",
    productionPage: "./pages/production.js",
    brandPage: "./pages/brand.js",
    servicePage: "./pages/service.js",
    hrPage: "./pages/hr.js",
    mainPage: "./pages/main.js",
    supportPage: "./pages/support.js",
    cooperationPage: "./pages/cooperation.js",
    contactsPage: "./pages/contacts.js",
    newsPage: "./pages/news.js",
  },
  name: 'Ui_test'
}