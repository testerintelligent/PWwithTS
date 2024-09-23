Feature: Policy_Creation_InsuranceApp

@Jeyagandhi_PolicyCreation
Scenario Outline: Policy Creation
Given User launch the page
When user entering '<username>' and '<password>'
And user click on New Insurance link

Examples:
|username           |password |not|
|test@test.com      |12345    |Yes|