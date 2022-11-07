import { Given, When, Then, World } from "cucumber";
import { DeleteIssuePage } from "../../page/issue_module.page/delete_issue.page";

let deleteIssuePage: DeleteIssuePage;

Given(/^User click issue with name "Issue-01"/, async function (this: World) {
  deleteIssuePage = new DeleteIssuePage(this.driver);
  await deleteIssuePage.clickIssueField();
  await this.driver.sleep(4000);
});

When(/^User click "More" button/, async function (this: World) {
  deleteIssuePage = new DeleteIssuePage(this.driver);
  await deleteIssuePage.clickMoreBtnInIssueField();
  await this.driver.sleep(3000);
});

When(/^User click "Delete" button in drop down menu/, async function (this: World) {
  deleteIssuePage = new DeleteIssuePage(this.driver);
  await deleteIssuePage.clickDeleteBtnInDropDownMenu();
  await this.driver.sleep(3000);
});

When(
  /^User select Delete in message box/,
  async function (this: World) {
    deleteIssuePage = new DeleteIssuePage(this.driver);
    await deleteIssuePage.clickDeleteBtnInMessageBox();
    await this.driver.sleep(3000);
  }
);

Then(/^Message box is displays/, async function (this: World) {
  deleteIssuePage = new DeleteIssuePage(this.driver);
  await deleteIssuePage.messageBoxDeleteIssueDisplays();
  await this.driver.sleep(3000);
});
