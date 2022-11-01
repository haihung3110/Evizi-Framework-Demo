// import { Given, When, Then } from "cucumber";
// import { SearchProjectsByNamePage } from "../page/search_project_name.page";
// import assert = require("assert");
// require("chromedriver");

// let searchProjectsByName: SearchProjectsByNamePage;

// Given(/^User click Projects button in top header/, async function () {
//   searchProjectsByName = new SearchProjectsByNamePage(this.driver);
//   await searchProjectsByName.isCurrentProjectPage();
// });

// When(/^User click View all projects item/, async function () {
//   searchProjectsByName = new SearchProjectsByNamePage(this.driver);
//   await searchProjectsByName.isCurrentProjectPage();
// });

// When(
//   /^User enter "([^"]*)" name project in search field/,
//   async function (nameOfProject: string) {
//     searchProjectsByName = new SearchProjectsByNamePage(this.driver);
//     await searchProjectsByName.enterNameProject(nameOfProject);
//     await this.driver.sleep(4000);
//   }
// );

// Then(
//   /^Projects with name in search field displays/,
//   async function (nameProjectInSearchField: string) {
//     let projectTemplate = new SearchProjectsByNamePage(this.driver);
//     let isOnProjectPageCreate = await projectTemplate.isProjectNameDisplayed(
//       nameProjectInSearchField
//     );
//     assert.equal(isOnProjectPageCreate, true);
//   }
// );
