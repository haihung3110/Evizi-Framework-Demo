Feature: Project
  Verify that user can perform
  the functions of the project module

  Scenario: PRO_01: Create new project
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
    When User click View all projects item
    And User select All Jira Product field
    And User select item "Jira Work Management"
    Then All projects with type "Jira Work Management" displays

  Scenario: PRO_03: Search projects by name project
    Given User click Projects button in top header
    When User click View all projects item
    When User enter "Evizi-Hung-Training" name project in search field
    Then Projects with name in search field displays

  # Scenario: PRO_04: Delete project
  # Given 

  # Scenario: PRO_05: Update project
