@tests
Feature:User Authentication test

    Scenario:Login should be valid
        Given User navigate to the login page
        And Enter the username and password as "demo" and "1234"
        And Click the submit button
        Then Verify the Home page
