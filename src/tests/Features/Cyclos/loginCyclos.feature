Feature:Cyclos_Payment_Validation

 @jeyagandhi_Web_Cyclosdemo
    Scenario:Cyclos login and payment validation
        Given User navigate to login page with "https://demo.cyclos.org/ui/login"
        And Enter the username and password "demo" and "1234"
        And Click the login submit button
        And Click the user payment option
        And I perform the user payment
        And I click the confirm button
        Then I validate the payment