import { When, Then, World } from "cucumber";
import { ProjectTemplatesPage } from "../page/projects_template";
import { stepTimeOut } from "../common/timeouts";

require("chromedriver");

let projectTemplate: ProjectTemplatesPage;

// Before(async function (this: World) {
//   if (this.driver) {
//     driver = this.driver;
//   }
// });

When(/^User click Project management template/, async function (this: World) {
  projectTemplate = new ProjectTemplatesPage(this.driver);
  await projectTemplate.clickWordManagementInTemplateLabel();
  await this.driver.sleep(15000);
});

When(
  /^Enter project name "([^"]*)"$/,
  async function (this: World, nameProject: string) {
    projectTemplate = new ProjectTemplatesPage(this.driver);
    await projectTemplate.enterProjectNameForProjectManagement(nameProject);
  }
);

When(/^User click Create button$/, async function (this: World) {
  projectTemplate = new ProjectTemplatesPage(this.driver);
  await projectTemplate.clickCreateProjectTemplateBtn();
});

Then(/^User is on project has been created$/, async function (this: World) {
  return;
});
