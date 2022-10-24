Feature: Create a new project

  @Create
  Scenario: Create new project
    When User click Jira Work Management
    When User click Create project
    When Select template want to create
    When Enter name project you want to create
    When Enter key
    When Click "Create project" button.
    Then User in project jsut created
