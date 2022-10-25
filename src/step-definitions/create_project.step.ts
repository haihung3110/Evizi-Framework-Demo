import { When, World } from "cucumber";
import { Projects } from "../page/projects";

require("chromedriver");

let project: Projects;

When(/^User click Jira Work Management$/, async function (this: World) {
  await project.clickJiraWorkManagement();
});

When(
  /^User click Projects button in top header$/,
  async function (this: World) {
    await project.clickProjectTopHead();
  }
);

When(
  /^User click Create project in drop down menu$/,
  async function (this: World) {
    await project.clickCreateProject();
  }
);
