Feature: Issue
  Verify that user can perform
  the functions of the Issue module

  # @fast
  # Scenario: ISS-01: Create a new issue
  #   Given User click Jira Work Management in TC Create Issue
  #   When User click "Evizi-Training-Manual" project
  #   And User select Create button in top header
  #   And User enter new Issue "Issue-01" in Summary field
  #   And User click button Create
  #   Then New Issue is created and message box displays

  # Scenario: ISS-02: Delete issue
  #   Given User click issue with name "Issue-01"
  #   When User click "More" button
  #   And User click "Delete" button in drop down menu
  #   And User select Delete in message box
  #   Then Message box is displays

  # Scenario: ISS-03: list issue by filter
  #   Given User click Jira WorK Management in TC list Issue by filters
  #   When User select "Evizi-Training-Manual" project
  #   And User select tab Issue in left navigatior
  #   And User select "Type" field
  #   And User select "Task" issue type
  #   Then Issue with type "Task" displays

  Scenario: ISS-04: search issue by name
    Given User click Jira WorK Management in TC search Issue by name
    # When User select existing project
    # And User select tab Issue in left navigator
    # And User enter issue with name "ISS-04: Improve Code" in search field
    # Then Issue with name is displays

  # Scenario: ISS-05: add comment
  #   Given User click Jira WorK Management in TC add comment
  #   When User select exist project
  #   And User select Issue tab in left navigatior
  #   And User select Issue with name "ISS-04"
  #   And User click "Add comment" field
  #   And User enter comment with content "test enter comment"
  #   And User select "Save" button
  #   Then Comment has displays
