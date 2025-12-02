// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = ({
  testDir : './tests',
  timeout : 40* 1000,
  expect : {
    timeout : 40* 1000
  },

  reporter : 'html',

  use : {
    //browserName : 'chromium',
    //browserName : 'firefox',

    // For Safari browser. Webkit is playwright specific engine derived from the safari
    browserName : 'webkit',

    headless : false
  }

});

module.exports = config

  