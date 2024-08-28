Feature:User Authentication test for Cyclos 

@jeyagandhi_Web_Authentication @jeyagandhi_Web_Cyclosdemo
    Scenario:Login should be valid
        Given User navigate to login page
        And Enter the username and password "demo" and "1234"
        And Click the submit
        And Click the user payment option
        And I perform the user payment
        And I click the confirm button
        Then I validate the payment
        