Feature:User Authentication test

@magesh_Web_Login @login
    Scenario:Login should be valid
        Given User navigate to the login page with "https://www.saucedemo.com/v1/"
        And Enter the username and password as "standard_user" and "secret_sauce"
        And Click the submit button
        Then Verify the Home page
