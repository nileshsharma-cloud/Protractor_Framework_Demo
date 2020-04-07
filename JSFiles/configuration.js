"use strict";
exports.__esModule = true;
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    Capabilities: [{ 'browserName': 'chrome' },
        { 'browserName': ' firefox' }],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['basicTest.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFDMUIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUNWLENBQUMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO1FBQzVCLEVBQUMsYUFBYSxFQUFHLFVBQVUsRUFBSyxDQUFDO0lBRW5DLHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUV2Qix3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FFRixDQUFDIn0=