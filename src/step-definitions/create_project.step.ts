import { Given, When, Then, Before, World } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { Login } from "../page/login";
import { Projects } from "../page/projects";

require("chromedriver");

let driver: WebDriver;
let project: Projects;

Before(async function (this: World) {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get(Constants.LOGIN_URL);
  let loginPage = new Login(driver);
  await loginPage.setUserName(Constants.DEFAULT_USR);
  await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
});

Given(/^User is on start page/, async () => {
  return;
});

When(/^User click Jira Work Management$/, async () => {
  project = new Projects(driver);
  await project.clickJiraWorkManagement();
});

When(/^User click Projects button in top header$/, async () => {
  project = new Projects(driver);
  await project.clickProjectTopHead();
});

When(/^User click Create project in drop down menu$/, async () => {
  project = new Projects(driver);
  await project.clickCreateProject();
});
