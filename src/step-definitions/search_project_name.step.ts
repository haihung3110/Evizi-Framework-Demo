import { assert } from "chai";
import { Given, When, Then, World } from "cucumber";
import { SearchProjectsByNamePage } from "../page/search_project_name.page";

require("chromedriver");

let searchProjectsByName: SearchProjectsByNamePage;

Given(/^User is Jira projects page/, async function () {
  searchProjectsByName = new SearchProjectsByNamePage(this.driver);
  await searchProjectsByName.isCurrentProjectPage();
});

When(
  /^User enter "([^"]*)" name project in search field/,
  async function (nameOfProject: string) {
    searchProjectsByName = new SearchProjectsByNamePage(this.driver);
    await searchProjectsByName.enterNameProject(nameOfProject);
  }
);

Then(/^Projects with name in search field displays/, async function () {});
