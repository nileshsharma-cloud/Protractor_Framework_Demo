Feature: I am going to validate my website functionalities


    Scenario: Calculate add functionality testing
        Given I will navigate to "calc" site
        When I add two numbers "3" and "5"
        Then the output should be displayed "9"


    Scenario: Calculate add functionality testing
        Given I will navigate to "calc" site
        When I add two numbers "4" and "6"
        Then the output should be displayed "10"


    Scenario:Calculate add functionality testing
        Given I will navigate to "AngularJS" site
        When I will clicked on Angular link
        And You will navigate to Angular page
        Then You will enter "hello" in search box


    Scenario:Verify navigation on SeleniumEasy website
        Given I will navigate to "SeleniumEasy" site
        When I will click on CrossBrowserTesting link
        And it will open another tab
        Then I will move to next tab.