Feature: User logs into account

Background:  
    Given User navigate to the Log in page 

Scenario: User log in successfully using valid login and password
    Given User enter username
    Given User enter password
    When User click on the "Login" button
    Then User log in successfully

Scenario: User login unsuccessfully using invalid login and password
    Given User enter username 
    Given User enter password
    When User click on the "Login" button
    Then Login should fail