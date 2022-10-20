Feature: Login Jira

  Scenario: Login
    Given I am on Jira home page
    When User enter <username> and click continue button
    When User enter <passwords> and click log in button
    Then User enter your work page

  Example: 
  | username            | passwords   | message            |
  | hung.phan@evizi.com | Haihung3110 | Login successfully |
