Feature:Automationdemo_Registration

@sevugan_Web_Automationdemo
    Scenario:Validation of registration details in automation demo portal
        Given User Launch the automation demo site
        And fill the mandatory details
        And upload an file in the portal
        And Click submit and navigate to next page
        Then Verify the Registration page details