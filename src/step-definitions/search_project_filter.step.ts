import { Given, When, Then, World } from "cucumber";
import { SearchProjectByFilterPage } from "../page/search_project_filter.page";

require("chromedriver");

let searchProjectsByFilter: SearchProjectByFilterPage;

//define step for SearchProjectByFilterStep

Given(/^User is on project was created/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.isCurrentProjectCreated();
});

When(/^Select Projects button in top header/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.clickProjectsTopHead();
  await this.driver.sleep(3000);
});

When(
  /^User select view all projects item from drop down menu/,
  async function (this: World) {
    searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
    await searchProjectsByFilter.clickViewAllProjectBtn();
    await this.driver.sleep(5000);
  }
);

Then(
  /^All projects with type "Jira Work Management" displays/,
  async function (this: World) {
    searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
    await searchProjectsByFilter.isDisplayProjectsByFilter();
  }
);
