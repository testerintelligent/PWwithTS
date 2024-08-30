@magesh_Web_Login
Feature:User Authentication test

    Scenario:Login should be valid
        Given User navigate to the login page
        And Enter the username and password as "standard_user" and "secret_sauce"
        And Click the submit button
        Then Verify the Home page
