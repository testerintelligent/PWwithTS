Feature: Register Policy - AppInsurance

Background: Login Page
Given User launch the page
When user enter 'test@test.com' and '12345'

@Jeyagandhi_RegisterPolicy
Scenario: Policy Creation for AppInsurance
Given User navigate to register page
When User enter the details 
Then user click on submit 
And the user should able to see the details