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
    loginDataPage: './data/loginData.js',
    loginPage: './pages/login.js',
    cookiesPage: './pages/cookies.js',
    openPersonalPage: "./pages/openPersonal.js",
    addProductPage: "./pages/addProduct.js",
    choiceServicesPage: "./pages/choiceServices.js",

    deliveryPage: "./pages/delivery.js",
  },
  name: 'Ui_test'
}