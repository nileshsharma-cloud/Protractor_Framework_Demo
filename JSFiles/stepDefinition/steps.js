"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var ElementLocators_1 = require("../calculatorLocators/ElementLocators");
var AngularJSLocators_1 = require("../calculatorLocators/AngularJSLocators");
var seleniumEasyLocators_1 = require("../calculatorLocators/seleniumEasyLocators");
var chai_1 = __importDefault(require("chai"));
var expect = chai_1["default"].expect;
var locate = new ElementLocators_1.ElementLocators();
var angularLocators = new AngularJSLocators_1.AngularJSLocators();
var seleniumlocators = new seleniumEasyLocators_1.SeleniumEasyLocators();
cucumber_1.Given('I will navigate to {string} site', function (string) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                protractor_1.browser.waitForAngularEnabled(false);
                if (!(string == "calc")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
            case 1:
                _a.sent();
                return [3 /*break*/, 6];
            case 2:
                if (!(string == "AngularJS")) return [3 /*break*/, 4];
                return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                if (!(string == "SeleniumEasy")) return [3 /*break*/, 6];
                return [4 /*yield*/, protractor_1.browser.get('https://www.seleniumeasy.com/test/')];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I add two numbers {string} and {string}', function (string, string2) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, locate.firstTextBox.sendKeys(string)];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [4 /*yield*/, locate.secondTextBox.sendKeys(string2)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('I will clicked on Angular link', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, angularLocators.clickOnAngularLink.click()];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('You will navigate to Angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("It will redirect to correct page");
});
cucumber_1.When('I will click on CrossBrowserTesting link', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, seleniumlocators.CrossBrowserTestingLink.click()];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('it will open another tab', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (windows) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(windows[1])];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, seleniumlocators.QAEngineersLink.click()];
                            case 2:
                                _a.sent();
                                protractor_1.browser.sleep(5000);
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('I will move to next tab.', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Write code here that turns the phrase above into concrete actions
        console.log('This is the last method');
        return [2 /*return*/];
    });
}); });
cucumber_1.Then('You will enter {string} in search box', function (string) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, angularLocators.enterKeyInSearchBox.sendKeys(string)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('the output should be displayed {string}', function (string) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, locate.goButton.click()];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [4 /*yield*/, locate.verifyText.getText().then(function (text) {
                        expect(text).to.equal(string);
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFnRkE7O0FBaEZBLHFDQUE2QztBQUU3Qyx5Q0FBcUM7QUFDckMseUVBQXdFO0FBQ3hFLDZFQUEyRTtBQUMzRSxtRkFBa0Y7QUFDbEYsOENBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGlCQUFJLENBQUMsTUFBTSxDQUFDO0FBR3pCLElBQUksTUFBTSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ25DLElBQUksZUFBZSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztBQUM5QyxJQUFJLGdCQUFnQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztBQUVsRCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLFVBQU8sTUFBTTs7OztnQkFDbkQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFFakMsQ0FBQSxNQUFNLElBQUksTUFBTSxDQUFBLEVBQWhCLHdCQUFnQjtnQkFDaEIscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsRUFBQTs7Z0JBQTlELFNBQThELENBQUM7OztxQkFFMUQsQ0FBQSxNQUFNLElBQUksV0FBVyxDQUFBLEVBQXJCLHdCQUFxQjtnQkFDMUIscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBQTs7Z0JBQTNDLFNBQTJDLENBQUM7OztxQkFFdkMsQ0FBQSxNQUFNLElBQUksY0FBYyxDQUFBLEVBQXhCLHdCQUF3QjtnQkFDN0IscUJBQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsRUFBQTs7Z0JBQXZELFNBQXVELENBQUM7Ozs7O0tBRS9ELENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxV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