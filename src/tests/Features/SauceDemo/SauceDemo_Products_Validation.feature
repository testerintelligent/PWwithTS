Feature: SauceDemo_Products_Validation

Background:
    Given User navigate to the login page with "https://www.saucedemo.com/v1/"
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    # Then Verify the Home page

@jaishree_Web_Productverification
Scenario: Validation of maximum and minimum price products in saucedemo application
    And verify the product item