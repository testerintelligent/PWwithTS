Feature: Policy_Creation_InsuranceApp

@Jeyagandhi_PolicyCreation
Scenario Outline: Policy Creation
Given User launch the application
When user entering '<username>' and '<password>'
And user click on New Insurance link
And User enters the personal detail '<Firstname>' '<Email>' '<Date of Birth>' '<Gender>' '<Policytype>' '<sumInsured>'
Then Submit the details and check whether policy is created

Examples:
|username           |password |not|Firstname|Email            |Date of Birth|Gender|Policytype      |sumInsured|
|test@test.com      |12345    |Yes|Tester   |Tester@sample.com|1991-03-06   |Female|Health Insurance|1,00,000  |