import { Given, When, Then, World } from "cucumber";
import { UpdateProjectPage } from "../page/update_project.page";

let updateProjectStep: UpdateProjectPage;

Given(
  /^User open Jira Work Management in TC Update Project/,
  async function (this: World) {
    updateProjectStep = new UpdateProjectPage(this.driver);
    await updateProjectStep.clickJiraWorkManagement();
    await this.driver.sleep(3000);
  }
);

When(
  /^User click Projects button in top header on TC Update/,
  async function (this: World) {
    updateProjectStep = new UpdateProjectPage(this.driver);
    await updateProjectStep.clickProjectsTopHead();
    await this.driver.sleep(3000);
  }
);

When(
  /^User select "View All Project" in TC Update Project/,
  async function (this: World) {
    updateProjectStep = new UpdateProjectPage(this.driver);
    await updateProjectStep.clickViewAllProjectBtn();
    await this.driver.sleep(3000);
  }
);

When(/^User select More buttons in TC Update/, async function (this: World) {
  updateProjectStep = new UpdateProjectPage(this.driver);
  await updateProjectStep.clickMoreBtn();
  await this.driver.sleep(3000);
});

When(
  /^User select "Project setting" in "Test-Project-Task-Tracking" project/,
  async function (this: World) {
    updateProjectStep = new UpdateProjectPage(this.driver);
    await updateProjectStep.clickProjectSettingsBtn();
    await this.driver.sleep(3000);
  }
);

When(/^User select "Default assignee" field/, async function (this: World) {
  updateProjectStep = new UpdateProjectPage(this.driver);
  await updateProjectStep.selectAssignField();
  await this.driver.sleep(5000);
});

When(/^User select "Project lead"/, async function (this: World) {
  updateProjectStep = new UpdateProjectPage(this.driver);
  await updateProjectStep.selectItemAssigneeField();
  await this.driver.sleep(3000);
});

When(/^User click "Save" button/, async function (this: World) {
  updateProjectStep = new UpdateProjectPage(this.driver);
  await updateProjectStep.clickSaveBtn();
  await this.driver.sleep(3000);
});

Then(
  /^Message box displays with text "successfully"/,
  async function (this: World) {
    updateProjectStep = new UpdateProjectPage(this.driver);
    await updateProjectStep.messageBoxUpdateDisplays();
  }
);
