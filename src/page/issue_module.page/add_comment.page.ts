import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class AddCommentPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for AddCommentPage

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  projectEviziTrainingManual = By.xpath(`//a[@href="/browse/TICKET"]`);

  issuesLeftNavigator = By.xpath(`//a[.="Issues"]`);

  issueItem = By.xpath(`//td[.="TICKET-27"]`);

  beforeCommentField = By.xpath(
    `//div[@data-test-id="issue.activity.comment"]//input`
  );

  afterCommentField = By.xpath(`//div[@data-testid='click-wrapper']//p`);

  saveBtn = By.xpath(`//button[@data-testid='comment-save-button']`);

  commentIsDisplays = By.xpath(`//p[.="test enter comment"]`);

  // method for AddCommentPage

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectExist() {
    await this.driver.findElement(this.projectEviziTrainingManual).click();
  }

  public async clickIssuesItemLeftNavi() {
    await this.driver.findElement(this.issuesLeftNavigator).click();
  }

  public async clickIssueItem() {
    await this.driver.findElement(this.issueItem).click();
  }

  public async clickBeforeCommentField() {
    await this.driver.findElement(this.beforeCommentField).click();
  }

  public async clickAfterCommentField(comment: string) {
    await this.driver.findElement(this.afterCommentField).sendKeys(comment);
  }

  public async clickSaveBtn() {
    await this.driver.findElement(this.saveBtn).click();
  }

  public async isCommentDisplay() {
    return this.driver.findElement(this.commentIsDisplays).isDisplayed();
  }
}
