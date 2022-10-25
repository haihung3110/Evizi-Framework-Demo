Feature: Create a new project

  Scenario: Create new project
    Given User is on start page
    When User click Jira Work Management
    And User click Projects button in top header
    And User click Create project in drop down menu
    And User click Project management template
    And Enter project name "Framework-Management-Issue"
    And User click Create button
    Then User is on project has been created
