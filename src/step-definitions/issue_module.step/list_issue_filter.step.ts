import { Given, When, Then, World } from "cucumber";
import { ListIssueFilterPage } from "../../page/issue_module.page/list_issue_filter.page";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

let listIssueFilter: ListIssueFilterPage;
let seleniumWebdriverWrapper: SeleniumWebdriverWrapper;

Given(
  /^User click Jira WorK Management in TC Search Issue/,
  async function (this: World) {
    listIssueFilter = new ListIssueFilterPage(this.driver);
    await listIssueFilter.clickJiraWorkManagement();
  }
);

When(
  /^User select "Evizi-Training-Manual" project/,
  async function (this: World) {
    listIssueFilter = new ListIssueFilterPage(this.driver);
    await listIssueFilter.clickProjectExist();
    await this.driver.sleep(4000);
  }
);

When(/^User select tab Issue in left navigatior/, async function (this: World) {
  listIssueFilter = new ListIssueFilterPage(this.driver);
  await listIssueFilter.clickIssuesItemLeftNavi();
  await this.driver.sleep(4000);
});

When(/^User select "Type" field/, async function (this: World) {
  listIssueFilter = new ListIssueFilterPage(this.driver);
  await listIssueFilter.clickFilterWithType();
  await this.driver.sleep(4000);
});

When(/^User select "Task" issue type/, async function (this: World) {
  listIssueFilter = new ListIssueFilterPage(this.driver);
  await listIssueFilter.clickItemInTypeFilter();
  await this.driver.sleep(4000);
});

Then(/^Issue with type "Task" displays/, async function (this: World) {
  listIssueFilter = new ListIssueFilterPage(this.driver);
  await listIssueFilter.isTaskFilterDisplays();
  await this.driver.sleep(4000);
});
