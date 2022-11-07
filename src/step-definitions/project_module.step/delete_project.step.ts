import { Given, When, Then, World } from "cucumber";
import { DeleteProjectPage } from "../../page/project_module.page/delete_project.page";

let deleteProjectStep: DeleteProjectPage;

Given(
  /^User click Projects button in top header after search by name/,
  async function (this: World) {
    deleteProjectStep = new DeleteProjectPage(this.driver);
    await deleteProjectStep.clickProjectsTopHead();
  }
);

When(/^User select "View All Projects"/, async function (this: World) {
  deleteProjectStep = new DeleteProjectPage(this.driver);
  await deleteProjectStep.clickViewAllProjectBtn();
  await this.driver.sleep(3000);
});

When(/^User click More button/, async function (this: World) {
  deleteProjectStep = new DeleteProjectPage(this.driver);
  await deleteProjectStep.clickMoreBtn();
  await this.driver.sleep(3000);
});

When(/^User click "Move to trash"/, async function (this: World) {
  deleteProjectStep = new DeleteProjectPage(this.driver);
  await deleteProjectStep.clickMoveToTrashBtn();
  await this.driver.sleep(3000);
});

When(
  /^User click "Move" button from message box/,
  async function (this: World) {
    deleteProjectStep = new DeleteProjectPage(this.driver);
    await deleteProjectStep.clickMoveToTrashBtnFromMessageBox();
    await this.driver.sleep(3000);
  }
);

Then(/^Messages box displays "successfully"/, async function (this: World) {
  deleteProjectStep = new DeleteProjectPage(this.driver);
  await deleteProjectStep.messageBoxDisplays();
});
