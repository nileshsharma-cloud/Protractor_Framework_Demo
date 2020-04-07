import { Given, When, Then } from "cucumber";
import { element, by } from 'protractor';
import { browser } from 'protractor';
import { ElementLocators } from '../calculatorLocators/ElementLocators';
import { AngularJSLocators } from '../calculatorLocators/AngularJSLocators'
import { SeleniumEasyLocators } from '../calculatorLocators/seleniumEasyLocators';
import chai from 'chai';
import { when, async } from "q";
var expect = chai.expect;


let locate = new ElementLocators();
let angularLocators = new AngularJSLocators();
let seleniumlocators = new SeleniumEasyLocators();

Given('I will navigate to {string} site', async (string) => {
    browser.waitForAngularEnabled(false);
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJS") {
        await browser.get('https://angularjs.org/');
    }
    else if (string == "SeleniumEasy") {
        await browser.get('https://www.seleniumeasy.com/test/');
    }
});


When('I add two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await locate.firstTextBox.sendKeys(string);
    await locate.secondTextBox.sendKeys(string2);
});

When('I will clicked on Angular link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await angularLocators.clickOnAngularLink.click();
});

When('You will navigate to Angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("It will redirect to correct page");
});


When('I will click on CrossBrowserTesting link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await seleniumlocators.CrossBrowserTestingLink.click();
});

When('it will open another tab', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.getAllWindowHandles().then(async (windows) => {
        await browser.switchTo().window(windows[1]);
        await seleniumlocators.QAEngineersLink.click();
        browser.sleep(5000);
    })
});

Then('I will move to next tab.', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log('This is the last method');

});


Then('You will enter {string} in search box', async (string) => {

    await angularLocators.enterKeyInSearchBox.sendKeys(string);
})

Then('the output should be displayed {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await locate.goButton.click();
    await locate.verifyText.getText().then(function (text) {
        expect(text).to.equal(string);
    })
});
