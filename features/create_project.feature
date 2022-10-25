Feature: Create a new project

  
  Scenario: Create new project
    Given Go to page Jira "https://id.atlassian.com/login"
    When User enter "Hung.phan@evizi.com" and click continue button
    When User enter "Hungphan3110" and click log in button
    When User click Jira Work Management
    And User click Projects button in top header
    And User click Create project in drop down menu
    When User choose template Project management
    When Enter project name "Framework-Issue"
    When Click "Create project" button.
    Then User has created a new project
