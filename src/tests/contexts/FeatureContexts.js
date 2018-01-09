import { Given, When, Then } from 'cucumber';


// Navigate to a URL
Given('I have navigated to {string}', (path) => {

});

// Enter a string into a field in a form, after finding the element by one of it's attributes
When('I enter {string} into the field with the {string} of {string}', (text, attribute, attrValue) => {

});

// Trigger a click event on an element, after finding the element by one of it's attributes
When('I click on the element with the {string} of {string}', (attribute, attrValue) => {

});

// The browser should perform a navigation to a different URL.
Then('I should be directed to {string}', (path) => {

});

// Checks to see if an element has been injected into the DOM, things like modals, popups, tooltips etc.
Then('I should be presented with an element with the {string} of {string}', (attribute, attrValue) => {

});
