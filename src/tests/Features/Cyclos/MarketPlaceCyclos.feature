Feature:Cyclos MarketPlace Module

@jeyagandhi_MarketCyclos
    Scenario:Login should be valid
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        And I navigate to the marketplace
        And I select the item from marketplace