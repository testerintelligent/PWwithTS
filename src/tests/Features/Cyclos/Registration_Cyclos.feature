Feature:User Registration

@jeyagandhi_Web_Registration
@runall
    Scenario:Valid Registration
        Given User Launch the URL
        And Click on Register link
        And Enter the mandatory details
        And Click Next and confirm
        Then Verify the Registration page
