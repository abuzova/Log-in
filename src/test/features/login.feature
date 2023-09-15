Feature: User logs into account

Background:  
    Given User navigate to the Log in page 

Scenario: User log in successfully using valid login and password
    Given User filles "Username" fild using valid login 
    Given User filles "Password" fild using valid password
    When User click on the "Login" button
    Then User enter to his account successfully

Scenario: User login unsuccessfully using invalid login and password
    Given User filles "Username" fild using invalid login 
    Given User filles "Password" fild using invalid password
    When User click on the "Login" button
    Then Login should fail