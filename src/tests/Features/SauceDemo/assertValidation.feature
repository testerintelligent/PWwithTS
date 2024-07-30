Feature: Cart product validation

Background:
    Given User navigate to the login page
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    Then Verify the Home page
@ProductVerification @valid
Scenario: Select max and min price products with using filter
    And verify the product item


    