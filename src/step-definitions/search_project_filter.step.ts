
import { SearchProjectByFilterPage } from "../page/search_project_filter.page";
import { Given, When, Then, World, Before } from "cucumber";
import { WebDriver } from "selenium-webdriver";



require("chromedriver");

let searchProjectsByFilter: SearchProjectByFilterPage;

//define step for SearchProjectByFilterStep

When(/^Select Projects button in top header/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.clickProjectsTopHead();
  await this.driver.sleep(3000);
});

When(
  /^User select view all projects item from drop down menu/,
  async function (this: World) {
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

When(/^User select "All Jira Product" filters/, async function (this: World) {
  await searchProjectsByFilter.openFilterProjectsItems();
  await this.driver.sleep(3000);
});

When(/^User select item from drop down menu/, async function (this: World) {
  await searchProjectsByFilter.selectItemFormFilter();
});

