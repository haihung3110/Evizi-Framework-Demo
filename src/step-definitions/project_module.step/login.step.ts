import { Given, When, Then } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Login } from "../../page/project_module.page/login.page";
import { Home } from "../../page/project_module.page/home.page";
import assert from "assert";
require("chromedriver");

let driver: WebDriver;
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

Given(/^Go to page Jira "([^"]*)"$/, async (url: string) => {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get(`${url}`);
});

When(
  /User enter "([^"]*)" and click continue button/,
  async (userName: string) => {
    let loginPage = new Login(driver);
    await loginPage.setUserName(userName);
  }
);

When(
  /User enter "([^"]*)" and click log in button/,
  async function (userPassword: string) {
    let loginPage = new Login(driver);
    await loginPage.setUserPassword(userPassword);
  }
);

Then(/User enter your work page/, async function () {
  let homePage = new Home(driver);
  let isOnHomePage = await homePage.isAt();
  assert.equal(isOnHomePage, true);
});
