import { After, Before, Status } from 'cucumber';
import { browser, WebDriver } from 'protractor';
import { async } from 'q';



// Before({tags: "@calculatorTesting"}, function () {
//   // This hook will be executed before scenarios tagged with @foo

//   browser.driver.manage().window().maximize();
// });

// Before({tags: "@angularTesting"}, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
//   console.log('This line will execute first.');

// });

After(async function (scenario) {

    if (scenario.result.status == Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});

