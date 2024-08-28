Feature:API verification
@magesh_API_Reqres @magesh_API
    Scenario:test the API
        Given Test get request "https://reqres.in/api/users?page=2"
        # When Test post request "https://api.github.com/user/repos"
        # And Test delete request "https://reqres.in/api/users/2"
        # And Test put request "https://reqres.in/api/users/2"
        
@magesh_API_Gorest @magesh_API 
        Scenario: Test GoRest 
        Given Test get request "https://gorest.co.in/public/v2/users/7294019"
        # When Test post request "https://gorest.co.in/public/v2/users"