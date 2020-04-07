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
var _this = this;
exports.__esModule = true;
var protractor_1 = require("protractor");
var ElementLocators_1 = require("./calculatorLocators/ElementLocators");
var AngularJSLocators_1 = require("./calculatorLocators/AngularJSLocators");
var seleniumEasyLocators_1 = require("./calculatorLocators/seleniumEasyLocators");
var locate = new ElementLocators_1.ElementLocators();
var angularLocators = new AngularJSLocators_1.AngularJSLocators();
var seleniumlocators = new seleniumEasyLocators_1.SeleniumEasyLocators();
describe("Test Suite", function () {
    beforeAll(function () {
        protractor_1.browser.getCapabilities().then(function (capabilities) {
            console.log(capabilities.get('browserName'));
        });
    });
    it("calculate the numbers ", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get("http://juliemr.github.io/protractor-demo/")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, locate.firstTextBox.sendKeys(3)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, locate.secondTextBox.sendKeys(5)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, locate.goButton.click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, locate.verifyText.getText().then(function (text) {
                            console.log(text);
                        })];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Visit the angular website', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, angularLocators.clickOnAngularLink.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, angularLocators.enterKeyInSearchBox.sendKeys('Hello')];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Visit Selenium Website and verify multiple tabs are open', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get('https://www.seleniumeasy.com/test/')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, seleniumlocators.CrossBrowserTestingLink.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.getWindowHandle().then(function () {
                            protractor_1.browser.switchTo().window("1");
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, seleniumlocators.QAEngineersLink.click()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzaWNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWtEQTs7QUFsREEseUNBQWdFO0FBRWhFLHdFQUF1RTtBQUN2RSw0RUFBMkU7QUFDM0Usa0ZBQWlGO0FBRWpGLElBQUksTUFBTSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ25DLElBQUksZUFBZSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztBQUM5QyxJQUFJLGdCQUFnQixHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztBQUVsRCxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ25CLFNBQVMsQ0FBQztRQUNOLG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsWUFBWTtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUVqRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHdCQUF3QixFQUFFOzs7d0JBQ3pCLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQUE7O29CQUE5RCxTQUE4RCxDQUFDO29CQUMvRCxxQkFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQTs7b0JBQXJDLFNBQXFDLENBQUM7b0JBQ3RDLHFCQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFBOztvQkFBdEMsU0FBc0MsQ0FBQztvQkFDdkMscUJBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQTdCLFNBQTZCLENBQUM7b0JBQzlCLHFCQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTs0QkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQyxDQUFDLEVBQUE7O29CQUZGLFNBRUUsQ0FBQTs7OztTQUVMLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywyQkFBMkIsRUFBRTs7O3dCQUU1QixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFBOztvQkFBM0MsU0FBMkMsQ0FBQztvQkFDNUMscUJBQU0sZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBaEQsU0FBZ0QsQ0FBQztvQkFDakQscUJBQU0sZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQTs7b0JBQTNELFNBQTJELENBQUM7Ozs7U0FDL0QsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDBEQUEwRCxFQUFFOzs7d0JBRTNELHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLEVBQUE7O29CQUF2RCxTQUF1RCxDQUFDO29CQUN4RCxxQkFBTSxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQXRELFNBQXNELENBQUM7b0JBQ3ZELHFCQUFNLG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNqQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLEVBQUE7O29CQUZGLFNBRUUsQ0FBQTtvQkFDRixxQkFBTSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUE7O29CQUE5QyxTQUE4QyxDQUFDOzs7O1NBR2xELENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=