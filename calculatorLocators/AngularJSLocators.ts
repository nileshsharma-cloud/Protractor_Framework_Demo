import { ElementFinder,element,by } from "protractor";

export class AngularJSLocators{

    clickOnAngularLink:ElementFinder;
    enterKeyInSearchBox:ElementFinder;

    constructor(){

        this.clickOnAngularLink=element(by.linkText('angular.io'));
        this.enterKeyInSearchBox=element(by.xpath("//input[@placeholder='Search']"));
    }


}