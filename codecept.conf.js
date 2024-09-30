const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
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
      url: 'https://www.rusklimat.ru',
      show: true,
      waitForTimeout: 8000,
      windowSize: '1900*800'
    }
  },
  include: {
    I: './steps_file.js',
    "loginData": './data/loginData.js',
    "login": './pages/login.js',
    "cookies": './pages/cookies.js'

  },
  name: 'Ui_test'
}