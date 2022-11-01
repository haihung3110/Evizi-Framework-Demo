import { Given, When, Then, World } from "cucumber";
import { SearchProjectsByNamePage } from "../page/search_project_name.page";
import assert from "assert";
require("chromedriver");

let searchProjectsByName: SearchProjectsByNamePage;

Given(
  /^User click Projects button in top header/,
  async function (this: World) {
    searchProjectsByName = new SearchProjectsByNamePage(this.driver);
    await searchProjectsByName.clickProjectsTopHead();
    await this.driver.sleep(3000);
  }
);

When(/^User click View all projects item/, async function (this: World) {
  searchProjectsByName = new SearchProjectsByNamePage(this.driver);
  await searchProjectsByName.clickViewAllProjectBtn();
  await this.driver.sleep(3000);
});

When(
  /^User enter "([^"]*)" name project in search field/,
  async function (nameOfProject: string) {
    searchProjectsByName = new SearchProjectsByNamePage(this.driver);
    await searchProjectsByName.enterNameProject(nameOfProject);
    await this.driver.sleep(3000);
  }
);

Then(
  /^Projects with name in search field displays/,
  async function (this: World) {
    searchProjectsByName = new SearchProjectsByNamePage(this.driver);
    await searchProjectsByName.isProjectNameDisplayed();
  }
);
