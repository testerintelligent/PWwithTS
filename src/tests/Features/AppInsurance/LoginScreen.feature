Feature: Login Validation - AppInsurance

@Jeyagandhi_LoginValidation
Scenario Outline: Login Creation
Given User launch the page
When user enter '<username>' and '<password>'
Then user able to navigate home page

Examples:
|username     |password|
|test@test.com|12345   |
