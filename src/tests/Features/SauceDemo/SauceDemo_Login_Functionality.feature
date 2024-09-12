Feature:SauceDemo_Login_Functionality

@magesh_Web_Login @login
    Scenario:Validation of user registration in saucedemo application
        Given User navigate to the login page with "https://www.saucedemo.com/v1/"
        And Enter the username and password as "standard_user" and "secret_sauce"
        And Click the submit button
               # Then Verify the Home page

