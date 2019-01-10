import { browser } from "protractor";

// spec.js
describe('Webelement', function() {
    
    browser.ignoreSynchronization = true
    it('Webelement', function() {//3
      browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
      browser.sleep(4000)

    }); 
    
});