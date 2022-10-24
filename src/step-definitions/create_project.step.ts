import { Given, When, Then } from "cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Login } from "../page/login";
import { Home } from "../page/home";
import assert from "assert";

require("chromedriver");

let driver: WebDriver;
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

When(/^User click Jira Work Management$/, async () => {});

When(/^User click Create project$/, async () => {});

When(/^Select template want to create$/, async () => {});

When(/^User enter your work page$/, async () => {});

When(/^Enter key$/, async () => {});

When(/^Click "Create project" button$/, async () => {});

Then(/^User in project jsut created$/, async () => {});
