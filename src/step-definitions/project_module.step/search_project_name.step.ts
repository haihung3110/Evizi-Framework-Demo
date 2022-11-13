import assert from "assert";
import { Given, When, Then, World } from "cucumber";
import { SearchProjectsByNamePage } from "../../page//project_module.page/search_project_name.page";

let searchProjectsByName: SearchProjectsByNamePage;

Given(
  /^User click Projects button in top header after list project by filter/,
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
    let isSearchProjectByNameDisplay =
      await searchProjectsByName.isProjectNameDisplayed();
    assert.equal(isSearchProjectByNameDisplay, true);
  }
);
