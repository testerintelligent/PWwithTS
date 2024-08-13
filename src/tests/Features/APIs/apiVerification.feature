Feature:API verification
@API @runall
    Scenario:test the API
        Given Test get request "https://reqres.in/api/users?page=2"
        When Test post request "https://reqres.in/api/users"  
        And Test delete request "https://reqres.in/api/users/2"
        And Test put request "https://reqres.in/api/users/2"
        
@api_gorest @API
        Scenario: Test GoRest 
        Given Test get request "https://gorest.co.in/public/v2/users/7294019"
        # When Test post request "https://gorest.co.in/public/v2/users"