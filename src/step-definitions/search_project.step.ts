import { Given, When, Then, World } from "cucumber";
import { WebDriver } from "selenium-webdriver";
import { SearchProjectByFilterPage } from "../page/search_project.page";

require("chromedriver");

let searchProjectsByFilter: SearchProjectByFilterPage;

//define step for SearchProjectByFilterStep
Given(/^User is on project was created/, async function (this: World) {
    await searchProjectsByFilter.isCurrentProjectCreated();
});
