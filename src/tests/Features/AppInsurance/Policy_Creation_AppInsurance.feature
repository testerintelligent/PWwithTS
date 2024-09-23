Feature: Policy_Creation_InsuranceApp

@Jeyagandhi_PolicyCreation
Scenario Outline: Policy Creation
Given User launch the page
When user enter '<username>' and '<password>'
Then user '<not>' able to navigate home page

Examples:
|username           |password |not|
|test@test.com      |12345    |Yes|