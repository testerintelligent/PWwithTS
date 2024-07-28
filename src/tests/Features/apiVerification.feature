Feature:API verification

    Scenario:test the API
        Given Test get request "https://reqres.in/api/users?page=2"
        When Test post request "https://reqres.in/api/users"
        And Test delete request "https://reqres.in/api/users/2"
        And Test put request "https://reqres.in/api/users/2"
        