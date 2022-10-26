import { Given, When, Then, Before, World, BeforeAll } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Constants } from "../common/constants";
import { stepTimeOut } from "../common/timeouts";
import { Login } from "../page/login";
import { Projects } from "../page/projects";

require("chromedriver");

let driver: WebDriver;
let project: Projects;

BeforeAll({ timeout: stepTimeOut }, async function () {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get(Constants.LOGIN_URL);
  let loginPage = new Login(driver);
  await loginPage.setUserName(Constants.DEFAULT_USR);
  await loginPage.setUserPassword(Constants.DEFAULT_PASSWORD);
});

Before(async function (this: World) {
  if (!this.driver) {
    this.driver = driver;
  }
});

Given(/^User is on start page/, async function (this: World) {
  return;
});

When(/^User click Jira Work Management$/, async function (this: World) {
  project = new Projects(driver);
  await project.clickJiraWorkManagement();
});

When(
  /^User click Projects button in top header$/,
  async function (this: World) {
    project = new Projects(driver);
    await project.clickProjectTopHead();
  }
);

When(
  /^User click Create project in drop down menu$/,
  async function (this: World) {
    project = new Projects(driver);
    await project.clickCreateProject();
    await driver.sleep(10000);
  }
);
