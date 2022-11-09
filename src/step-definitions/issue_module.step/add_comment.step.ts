import { Given, When, Then, World } from "cucumber";
import { AddCommentPage } from "../../page/issue_module.page/add_comment.page";

let addCommentPage: AddCommentPage;

Given(
  /^User click Jira WorK Management in TC add comment/,
  async function (this: World) {
    addCommentPage = new AddCommentPage(this.driver);
    await addCommentPage.clickJiraWorkManagement();
    await this.driver.sleep(3000);
  }
);

When(/^User select exist project/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.clickProjectExist();
  await this.driver.sleep(3000);
});

When(/^User select Issue tab in left navigatior/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.clickIssuesItemLeftNavi();
  await this.driver.sleep(3000);
});

When(/^User select Issue with name "ISS-04"/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.clickIssueItem();
  await this.driver.sleep(3000);
});

When(/^User click "Add comment" field/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.clickBeforeCommentField();
  await this.driver.sleep(3000);
});

When(
  /^User enter comment with content "([^"]*)"/,
  async function (this: World, comment: string) {
    addCommentPage = new AddCommentPage(this.driver);
    await addCommentPage.clickAfterCommentField(comment);
    await this.driver.sleep(3000);
  }
);

When(/^User select "Save" button/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.clickSaveBtn();
  await this.driver.sleep(3000);
});

Then(/^Comment has displays/, async function (this: World) {
  addCommentPage = new AddCommentPage(this.driver);
  await addCommentPage.isCommentDisplay();
  await this.driver.sleep(2000);
});
