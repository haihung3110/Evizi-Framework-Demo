import { Given, When, Then, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { SearchProjectByFilterPage } from "../page/search_project.page";

require("chromedriver");

let searchProjectsByFilter: SearchProjectByFilterPage;
let driver: WebDriver;

//define step for SearchProjectByFilterStep
Given(/^User is on project was created/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.isCurrentProjectCreated();
});

When(/^Select Project button in top header/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.clickProjectTopHead();
});

When(
  /^User select view all projects item from drop down menu/,
  async function (this: World) {
    searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
    await searchProjectsByFilter.clickViewAllProjectBtn();
    await driver.sleep(3000);
  }
);

When(/^User select "All Jira Product" filters/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.openFilterProjectsItems();
  await driver.sleep(3000);
});

When(/^User select item from drop down menu/, async function (this: World) {
  searchProjectsByFilter = new SearchProjectByFilterPage(this.driver);
  await searchProjectsByFilter.selectItemFormFilter();
});
