import { Config, browser } from 'protractor';
import * as reporter from 'cucumber-html-reporter';


// An example configuration file
export let config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: () => {
    browser.driver.manage().window().maximize();
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: [
    '../features/demo.feature' // accepts a glob
  ],

  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      output: './cucumberreport.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome 75.0.3770.100 ",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);

  },

  cucumberOpts: {
    // require step definitions
    format: 'json:./cucumberreport.json',
    // tags: '@angularSite',
    require: [
      './stepDefinition/*.js' // accepts a glob
    ]
  }




};
