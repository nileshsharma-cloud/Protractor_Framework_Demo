import { ElementFinder, element, by } from "protractor";

export class SeleniumEasyLocators {

    CrossBrowserTestingLink: ElementFinder;
    QAEngineersLink: ElementFinder;


    constructor() {
        this.CrossBrowserTestingLink = element(by.xpath("//img[@class='cbt']"));
        this.QAEngineersLink = element(by.xpath("//section[@class='stripe screenshots']//div[@class='callout-content-header qaEngineerToggle'][contains(text(),'QA Engineers')]"));

    }

}