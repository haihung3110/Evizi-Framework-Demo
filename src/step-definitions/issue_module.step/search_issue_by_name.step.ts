import assert from "assert";
import { Given, When, Then, World } from "cucumber";
import { until } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";
import { SearchIssueByName } from "../../page/issue_module.page/search_issue_by_name.page";

let searchIssueByName: SearchIssueByName;
let driverWrapper: SeleniumWebdriverWrapper;

Given(
  /^User click Jira WorK Management in TC search Issue by name/,
  async function (this: World) {
    searchIssueByName = new SearchIssueByName(this.driver);
    await this.driver.wait(
      until.elementLocated(searchIssueByName.jiraWorkManagementBtn)
    );
    await searchIssueByName.clickJiraWorkManagement();
  }
);

When(/^User select existing project/, async function (this: World) {
  searchIssueByName = new SearchIssueByName(this.driver);
  await this.driver.wait(
    until.elementLocated(searchIssueByName.projectEviziTrainingManual)
  );
  await searchIssueByName.clickProjectExist();
});

When(/^User select tab Issue in left navigator/, async function (this: World) {
  searchIssueByName = new SearchIssueByName(this.driver);
  await this.driver.wait(
    until.elementLocated(searchIssueByName.issueLeftNavigator)
  );
  await searchIssueByName.clickIssuesItemLeftNavi();
  await this.driver.sleep(3000);
});

When(
  /^User enter issue with name "([^"]*)" in search field/,
  async function (this: World, issueName: string) {
    searchIssueByName = new SearchIssueByName(this.driver);
    await searchIssueByName.enterNameIssue(issueName);
  }
);

Then(/^Issue with name is displays/, async function () {
  let searchIssueByName = new SearchIssueByName(this.driver);
  let isSearchIssueByNameDisplays =
    await searchIssueByName.isIssueNameDisplayed();
  assert.equal(isSearchIssueByNameDisplays, true);
});
