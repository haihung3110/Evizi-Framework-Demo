import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class DeleteIssuePage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for DeleteIssuePage

  issueField = By.xpath(
    `//div[@data-test-id="work-management-board.ui.board.column.card.container"]//following::div//span[text()="TICKET-18"]`
  );

  moreBtnInIssueField = By.xpath(
    `//div[@data-test-id="work-management-board.ui.board.column.card.actions-section"]//button`
  );

  deleteBtnInDropDownMenu = By.xpath(
    `//button[@data-testid="work-management-board.ui.board.column.card-actions.delete"]`
  );

  deleteBtnInMessageBox = By.xpath(`//button[.='Delete']//span`);

  messageBoxIsDeleteDisplay = By.xpath(`//div[starts-with(.,'Item deleted')]`);

  // method for DeleteIssuePage

  public async clickIssueField() {
    await this.driver.findElement(this.issueField).click();
  }

  public async clickMoreBtnInIssueField() {
    await this.driver.findElement(this.moreBtnInIssueField).click();
  }

  public async clickDeleteBtnInDropDownMenu() {
    await this.driver.findElement(this.deleteBtnInDropDownMenu).click();
  }

  public async clickDeleteBtnInMessageBox() {
    await this.driver.findElement(this.deleteBtnInMessageBox).click();
  }

  public async messageBoxDeleteIssueDisplays() {
    await this.driver.findElement(this.messageBoxIsDeleteDisplay).isDisplayed();
  }
}
