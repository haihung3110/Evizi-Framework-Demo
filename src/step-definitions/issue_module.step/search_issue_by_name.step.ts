import { Given, When, Then, World } from "cucumber";
import { SearchIssueByName } from "../../page/issue_module.page/search_issue_by_name.page";

let searchIssueByName: SearchIssueByName;

Given(
  /^User click Jira WorK Management in TC search Issue by name/,
  async function (this: World) {
    searchIssueByName = new SearchIssueByName(this.driver);
    await searchIssueByName.clickJiraWorkManagement();
    await this.driver.sleep(3000);
  }
);

When(/^User select existing project/, async function (this: World) {
  searchIssueByName = new SearchIssueByName(this.driver);
  await searchIssueByName.clickProjectExist();
  await this.driver.sleep(3000);
});

When(/^User select tab Issue in left navigator/, async function (this: World) {
  await searchIssueByName.clickIssuesItemLeftNavi();
  searchIssueByName = new SearchIssueByName(this.driver);
  await this.driver.sleep(3000);
});

When(
  /^User enter issue with name "([^"]*)" in search field/,
  async function (this: World, issueName: string) {
    searchIssueByName = new SearchIssueByName(this.driver);
    await searchIssueByName.enterNameIssue(issueName);
    await this.driver.sleep(3000);
  }
);

Then(/^Issue with name is displays/, async function (this: World) {
  searchIssueByName = new SearchIssueByName(this.driver);
  await searchIssueByName.isIssueNameDisplayed();
  await this.driver.sleep(3000);
});
