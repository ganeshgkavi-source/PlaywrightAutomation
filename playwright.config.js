const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,
  //retries:2,
  reporter: [['allure-playwright']],

  use: {
    headless: false,
    baseURL: 'https://example.com',
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium',
      viewport:null,
      launchOptions:{args:['--start-maximized']},
      screenshot:"off",
      trace:"on",
      video:"on"
    }},
    /*{
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },*/
  ],
});