Feature: Project
  Verify that user can perform
  the functions of the Project module

  Scenario: PRO_01: Verify that user can create new Projects on Jira
    Given User is on start page
    When User open Jira Work Management
    And User select Projects button in top header
    And User select Create project in drop down menu
    And User select Project management template
    And User create project with name "Framework-Management-Issue" on project create page
    And User select Create button
    Then New project "Framework-Management-Issue" displays

  Scenario: PRO_02: Verify that user can list Projects by Filter
    Given User click Project button in top header
    When User select View all projects items
    And User select All Jira Product field
    And User select item "Jira Work Management"
    Then All projects with type "Jira Work Management" displays

  Scenario: PRO_03: Verify that user can search Projects by name
    Given User click Projects button in top header after list project by filter
    When User click View all projects item
    When User enter "Evizi-Hung-Training" name project in search field
    Then Projects with name in search field displays

  Scenario: PRO_04: Verify that user can move project to trash and message has display "Successfully moved to trash"
    Given User click Projects button in top header after search by name
    When User select "View All Projects"
    And User click More button
    And User click "Move to trash"
    And User click "Move" button from message box
    Then Message box display successfully

  Scenario: PRO_05: Verify that user can update Projects and message has display "Succesfully updated"
    Given User open Jira Work Management in TC Update Project
    When User click Projects button in top header on TC Update
    And User select "View All Projects" in TC Update Project
    And User select More buttons in TC Update
    And User select "Project setting" in "Test-Project-Task-Tracking" project
    And User select "Default assignee" field
    And User select "Project lead"
    And User click "Save" button
    Then Message box displays with text "successfully"
