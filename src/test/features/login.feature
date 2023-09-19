Feature: User logs into account

Background:  
    

Scenario: User log in successfully using valid username and password
    Given User navigate to the Log in page 
    When User enter valid username and password
    Then User log in successfully

Scenario: User login unsuccessfully using invalid username and password
    Given User navigate to the Log in page 
    When User enter invalid username and password
    Then Login should fail