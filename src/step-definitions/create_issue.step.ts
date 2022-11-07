import { Given, When, Then, World } from "cucumber";
import { CreateIssuePage } from "../page/create_issue.page";

let createIssuePage: CreateIssuePage;

Given(
  /^User click Jira Work Management in TC Create Issue/,
  async function (this: World) {
    createIssuePage = new CreateIssuePage(this.driver);
    await createIssuePage.clickJiraWorkManagement();
    await this.driver.sleep(4000);
  }
);

When(
  /^User select "Evizi-Hung-Training" project/,
  async function (this: World) {
    createIssuePage = new CreateIssuePage(this.driver);
    await createIssuePage.clickProjectExist();
    await this.driver.sleep(4000);
  }
);

When(/^User select Create button in top header/, async function (this: World) {
  createIssuePage = new CreateIssuePage(this.driver);
  await createIssuePage.clickCreateBtnTopHeader();
  await this.driver.sleep(4000);
});

When(
  /^User enter new Issue "([^"]*)" in Summary field/,
  async function (this: World, issueName: string) {
    createIssuePage = new CreateIssuePage(this.driver);
    await createIssuePage.enterIssueInSummaryField(issueName);
    await this.driver.sleep(4000);
  }
);

When(/^User click button Create/, async function (this: World) {
  createIssuePage = new CreateIssuePage(this.driver);
  await createIssuePage.clickCreateBtn();
  await this.driver.sleep(3000);
});

Then(
  /^New Issue is created and message box displays/,
  async function (this: World) {
    createIssuePage = new CreateIssuePage(this.driver);
    await createIssuePage.messageBoxNewIssueCreateDisplays();
  }
);
