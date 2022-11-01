Feature: Project

  Scenario: Create new project
    Given User is on start page
    When User open Jira Work Management
    And User select Projects button in top header
    And User select Create project in drop down menu
    And User select Project management template
    And User create project with name "Framework-Management-Issue" on project create page
    And User select Create button
    Then New project "Framework-Management-Issue" displays

  Scenario: PRO_02: List projects by filters
    Given User click Project button in top header
    When User select View all projects items
    And User select All Jira Product field
    And User select item "Jira Work Management"
    Then All projects with type "Jira Work Management" displays
