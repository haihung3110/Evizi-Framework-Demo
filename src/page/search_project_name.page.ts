import { Given, When, Then, World } from "cucumber";
import { SearchProjectsByNamePage } from "../step-definitions/search_project_name.step";

require("chromedriver");

let searchProjectsByName: SearchProjectsByNamePage;

Given(/^/, async function (this: World) {
  searchProjectsByName = new SearchProjectsByNamePage(this.driver);
});
