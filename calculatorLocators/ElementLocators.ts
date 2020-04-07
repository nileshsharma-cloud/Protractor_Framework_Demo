import { ElementFinder, element, by } from "protractor";

export class ElementLocators {

    firstTextBox: ElementFinder;
    secondTextBox: ElementFinder;
    goButton:ElementFinder;
    verifyText:ElementFinder;
    

    constructor() {
        this.firstTextBox = element(by.model('first'));
        this.secondTextBox = element(by.model('second'));
        this.goButton=element(by.buttonText("Go!"));
        this.verifyText=element(by.tagName("h2"));
        
    }

}