Feature:Insurance App API

@sevugan_API_appInsurance
Scenario: Test GitHubApi
        Given Test Login functionality for insurance app "http://192.168.99.141:5000/home"
        And Issue policy from insurance app "http://192.168.99.141:5000/Dashboard"
        And I retrieve the list of users from insurance app "http://192.168.99.141:5000/Dashboard"