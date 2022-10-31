
import assert from "assert";
import { Given, When, Then, World } from "cucumber";

import { SearchProjectByFilterPage } from "../page/list_project_filter.page";


require("chromedriver");

let ListProjectByFilter: SearchProjectByFilterPage;

//define step for SearchProjectByFilterStep

Given(/^User click Project button in top header/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.clickProjectsTopHead();
});

When(/^User click View all projects items/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.clickViewAllProjectBtn();
});

When(/^User select All Jira Product field/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.waitUntilElementLoadedAndDisplayed(
    this.filterProjects
  );
  await ListProjectByFilter.openFilterProjectsItems();
});

When(/^User select item "Jira Work Management"/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.selectItemFormFilter();
});

Then(
  /^All projects with type "Jira Work Management" displays/,
  async function (this: World) {
    ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
    await ListProjectByFilter.isDisplayProjectsByFilter();
    assert.equal(ListProjectByFilter, true);
  }
);
