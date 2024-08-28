Feature:Cyclos MarketPlace Module

@jeyagandhi_MarketCyclos @jeyagandhi_Web_Cyclosdemo
    Scenario:Login should be valid
        Given User navigate to login page
        And Enter the username and password "demo" and "1234"
        And Click the submit
        And I navigate to the marketplace
        And I select the item from marketplace