Feature: Issue
  Verify that user can perform
  the functions of the Issue module

  Scenario: ISS-04: search issue by name
    Given User click Jira WorK Management in TC search Issue by name
    When User select existing project
    And User select tab Issue in left navigator
    And User enter issue with name "ISS-04: Improve Code" in search field
    Then Issue with name is displays
