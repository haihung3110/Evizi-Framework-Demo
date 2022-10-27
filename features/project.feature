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



  Scenario: Search projects by filters
    Given User is on 
    When User open Jira Work Management page
    And User select view all projects item from header menu
    And User select All Jira Product filters from 
    And User create project with name "Framework-Management-Issue" on project create page
    Then New project "Framework-Management-Issue" displays
