Feature: Issue
  Verify that user can perform
  the functions of the Issue module

  Scenario: ISS-01: Create a new issue
    Given User click Jira Work Management in TC Create Issue
    When User select "Evizi-Hung-Training" project
    And User select Create button in top header
    And User enter new Issue "Issue-01" in Summary field
    And User click button Create
    # Then New Issue is created
