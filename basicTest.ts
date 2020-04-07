import { browser, element, by, Capabilities } from 'protractor';
import { async } from 'q';
import { ElementLocators } from './calculatorLocators/ElementLocators';
import { AngularJSLocators } from './calculatorLocators/AngularJSLocators';
import { SeleniumEasyLocators } from './calculatorLocators/seleniumEasyLocators';

let locate = new ElementLocators();
let angularLocators = new AngularJSLocators();
let seleniumlocators = new SeleniumEasyLocators();

describe("Test Suite", () => {
    beforeAll(function () {
        browser.getCapabilities().then(function (capabilities) {
            console.log(capabilities.get('browserName'));

        })
    })

    it("calculate the numbers ", async () => {
        await browser.get("http://juliemr.github.io/protractor-demo/");
        await locate.firstTextBox.sendKeys(3);
        await locate.secondTextBox.sendKeys(5);
        await locate.goButton.click();
        await locate.verifyText.getText().then(function (text) {
            console.log(text);
        })

    })

    it('Visit the angular website', async () => {

        await browser.get('https://angularjs.org/');
        await angularLocators.clickOnAngularLink.click();
        await angularLocators.enterKeyInSearchBox.sendKeys('Hello');
    })

    it('Visit Selenium Website and verify multiple tabs are open', async () => {

        await browser.get('https://www.seleniumeasy.com/test/');
        await seleniumlocators.CrossBrowserTestingLink.click();
        await browser.getWindowHandle().then(function () {
            browser.switchTo().window("1");
        })
        await seleniumlocators.QAEngineersLink.click();


    })

})

