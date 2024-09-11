Feature:Cyclos MarketPlace Payment

Background: MarketPlace selection
       Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        And I navigate to the marketplace
        
 @jeyagandhi_Web_MarketPlace 
 Scenario: Selecting Item 
    Given I select the item from marketplace
    And I perform the payment
    And I enter the amount for the item
    And I confirm the payment