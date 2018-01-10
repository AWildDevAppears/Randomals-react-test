const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

let p;
// Navigate to a URL
Given('I have navigated to {string}', (path) => {
   p = driver.get(`127.0.0.1:3000${path}`);
});

// Enter a string into a field in a form, after finding the element by one of it's attributes
When('I enter {string} into the field with the {string} of {string}', (text, attribute, attrValue) => {
  p.then(() => {
    driver.findElement(By.css(`[${attribute}="${attrValue}"]`)).sendKeys(text);
  })

});

// Trigger a click event on an element, after finding the element by one of it's attributes
When('I click on the element with the {string} of {string}', (attribute, attrValue) => {
  p.then(() => {
    driver.findElement(By.css(`[${attribute}="${attrValue}"]`)).click();
  })
});

// The browser should perform a navigation to a different URL.
Then('I should be directed to {string}', (path) => {
  p.then(() => {
    driver.getCurrentUrl()
      .then((res) => {
        expect(res).to.eql(path);
      })
  });
});

// Checks to see if an element has been injected into the DOM, things like modals, popups, tooltips etc.
Then('I should be presented with an element with the {string} of {string}', (attribute, attrValue) => {

});
