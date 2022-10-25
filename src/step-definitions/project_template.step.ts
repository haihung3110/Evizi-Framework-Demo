import { When, Then } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { ProjectTemplatesPage } from "../page/projects_template";

require("chromedriver");

let driver: WebDriver;
let projectTemplate: ProjectTemplatesPage;

When(/^User click Project management template/, async () => {
  projectTemplate = new ProjectTemplatesPage(driver);
  await projectTemplate.clickProjectManagementTemplate();
});

When(/^Enter project name "([^"]*)"$/, async () => {
  projectTemplate = new ProjectTemplatesPage(driver);
  await projectTemplate.clickProjectManagementTemplate();
});

When(/^User click Create button$/, async () => {
  projectTemplate = new ProjectTemplatesPage(driver);
  await projectTemplate.openNewProjectTypeByTemplate();
});

Then(/^User is on project has been created$/, async () => {
  return;
});
