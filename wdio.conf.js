exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: [
    './test/specs/**/*.specs.js'
  ],

  services: [
    ['browserstack', {
      testObservability: false
    }]
  ],

  capabilities: [{

    platformName: 'Android',

    'appium:deviceName'      : 'Google Pixel 3',
    'appium:platformVersion' : '9.0',
    'appium:automationName'  : 'UiAutomator2',
    'appium:app'             : process.env.BROWSERSTACK_APP_ID || 'bs://251ea6fb625c7169878b44b03488302679fc4fe0',

    'bstack:options': {
      projectName : 'First WebdriverIO Android Project',
      buildName   : 'Webdriverio Android',
      sessionName : 'first_test',
      debug       : true,
    }
  }],

  logLevel:           'info',
  screenshotPath:     './errorShots/',
  baseUrl:            '',
  waitforTimeout:     10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount:   3,

  framework: 'mocha',
  mochaOpts: {
    ui:      'bdd',
    timeout: 20000
  }
};