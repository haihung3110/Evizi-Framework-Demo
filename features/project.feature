Feature: Project
  Verify that user can perform
  the functions of the project module

  Scenario: PRO_05: User update project
    Given User open Jira Work Management in TC Update Project
    When User click Projects button in top header on TC Update
    And User select "View All Projects" in TC Update Project
    And User select More buttons in TC Update
    And User select "Project setting" in "Test-Project-Task-Tracking" project
    And User select "Default assignee" field
    And User select "Project lead"
    And User click "Save" button
    Then Message box displays with text "successfully"
