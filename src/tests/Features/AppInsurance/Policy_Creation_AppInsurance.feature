Feature: Policy_Creation_InsuranceApp

@Jeyagandhi_PolicyCreation
Scenario Outline: Policy Creation
Given User launch the application
When user entering '<username>' and '<password>'
And user click on New Insurance link
And User enters the personal detail '<Firstname>' '<Date of Birth>' '<Gender>' '<Policytype>' '<sumInsured>'
Then Submit the details and check whether policy is created

Examples:
|username           |password |Firstname           |Date of Birth|Gender|Policytype       |sumInsured|
|test@test.com      |12345    |Tester              |1991-03-06   |Female|Health Insurance |1,00,000  |
|jeya.jina@gmail.com|1234     |Automation Tester   |1991-03-06   |Female|Life Insurance   |3,00,000  |
|test@test.com      |12345    |Tester              |1991-03-06   |Female|Vehicle Insurance|5,00,000  |