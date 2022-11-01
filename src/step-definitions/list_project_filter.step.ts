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

When(/^User select View all projects items/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.clickViewAllProjectBtn();
  // await ListProjectByFilter.waitUntilPageElementsLoadedAndDisplayed(
  //   this.filterProjects
  // );
  await this.driver.sleep(3000);
});

When(/^User select All Jira Product field/, async function (this: World) {
  ListProjectByFilter = new SearchProjectByFilterPage(this.driver);
  await ListProjectByFilter.openFilterProjectsItems();
  await this.driver.sleep(3000);
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
    await this.driver.sleep(3000);
  }
);
