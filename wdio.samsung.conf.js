const { config } = require('./wdio.shared.conf.js');

config.capabilities = [{
  platformName: 'Android',

  'appium:deviceName': 'Samsung Galaxy S10',
  'appium:platformVersion': '9.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://251ea6fb625c7169878b44b03488302679fc4fe0',

  'bstack:options': {
    projectName: 'Mobile Project',
    buildName: 'Galaxy S10 Run',
    sessionName: 'Galaxy_S10_test',
    debug: true
  }
}];

exports.config = config;
