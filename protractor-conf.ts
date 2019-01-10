import { browser } from "protractor";

exports.config = {
    // allScriptsTimeout:2,
    framework: 'jasmine',
    
    capabilities: {
        browserName: 'chrome',
      },
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["test.js"],

    jasmineNodeOpts:{
      defaultTimeoutInterval:600000
    }
  }