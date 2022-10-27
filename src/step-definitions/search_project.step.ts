import { Given, When, Then, World, Before } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { SearchProjectByFilterPage } from "../page/search_project.page";

require("chromedriver");

let searchProjectsByFilter: SearchProjectByFilterPage;
let driver: WebDriver;

//define step for SearchProjectByFilterStep
Given(/^User is on project was created/, async function (this: World) {
  
});

When(/^Select Projects button in top header/, async function (this: World) {
  await searchProjectsByFilter.clickProjectsTopHead();
  await this.driver.sleep(3000);
});

When(
  /^User select view all projects item from drop down menu/,
  async function (this: World) {
    await searchProjectsByFilter.clickViewAllProjectBtn();
    await this.driver.sleep(3000);
  }
);

When(/^User select "All Jira Product" filters/, async function (this: World) {
  await searchProjectsByFilter.openFilterProjectsItems();
  await this.driver.sleep(3000);
});

When(/^User select item from drop down menu/, async function (this: World) {
  await searchProjectsByFilter.selectItemFormFilter();
});
