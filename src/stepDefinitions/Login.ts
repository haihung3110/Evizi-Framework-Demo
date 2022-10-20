import { Given, When, Then, BeforeAll } from "@cucumber/cucumber";
import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import { loginPage } from "../page/loginPage";

let driver: WebDriver;

function definitionLogins(): void {
  Given(/^I am on Jira home page/, async function (url: string): Promise<void> {
    await this.driver.get(`http://www.${url}`);
  });
  When(
    /^User enter ${username} and click continue button/,
    async function (username: string): Promise<void> {
      await this.loginPage.setUserName(username);
      await this.loginPage.click();
    }
  );
  When(
    /^ User enter ${passwords} and click log in button/,
    async function (passwords: string): Promise<void> {
      await this.loginPage.login(passwords);
      await this.loginPage.click();
    }
  );
  Then(/^I am on Jira home page/, async function (url: string): Promise<void> {
    await this.driver.get(`http://www.${url}`);
  });
}

module.exports = loginPage;
