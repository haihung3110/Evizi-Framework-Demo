import { When, Then, World } from "cucumber";
import { ProjectTemplatesPage } from "../page/projects_template.page";
import { assert } from "chai";

require("chromedriver");

let projectTemplate: ProjectTemplatesPage;

When(/^User select Project management template/, async function (this: World) {
  projectTemplate = new ProjectTemplatesPage(this.driver);
  await projectTemplate.clickWordManagementInTemplateLabel();
  await this.driver.sleep(5000);
});

When(
  /^User create project with name "([^"]*)" on project create page$/,
  async function (this: World, nameProject: string) {
    projectTemplate = new ProjectTemplatesPage(this.driver);
    await projectTemplate.enterProjectNameForProjectManagement(nameProject);
  }
);

When(/^User select Create button$/, async function (this: World) {
  projectTemplate = new ProjectTemplatesPage(this.driver);
  await this.driver.sleep(2000);
  await projectTemplate.clickCreateProjectTemplateBtn();
  await this.driver.sleep(5000);
});

Then(
  /^New project "Framework-Management-Issue" displays$/,
  async function (this: World) {
    let isOnProjectPageCreate = await projectTemplate.isAtNewProjectDisplay();
    assert.equal(isOnProjectPageCreate, true);
  }
);
