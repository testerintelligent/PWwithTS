
Feature: Select Product with Filter

Background:
    Given User navigate to the login page
    And Enter the username and password as "standard_user" and "secret_sauce"
    And Click the submit button
    Then Verify the Home page
    
@withFilter_jaishree @valid_magesh @runall
Scenario: Select max and min price products with using filter
    Given Using filter to select the products
    And verify the MyCart page URL
    And Click checkout button
    And verify the checkout page URL
    And User enter checkout information and click continue button
    And verify the overview page URL
    And Click Finish button to confirm your order
    And Verify the checkout-complete page URL
    Then User take final order confirmation screenshot