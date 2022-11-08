import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class CreateIssuePage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for CreateIssuePage

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  projectEviziTrainingManual = By.xpath(`//a[@href="/browse/TICKET"]`);

  createIssueBtnTopHeader = By.xpath(
    `//button[@id='createGlobalItemIconButton']`
  );

  summaryField = By.xpath(`//input[@name='summary']`);

  createBtn = By.xpath(
    `//button[@data-testid='issue-create.common.ui.footer.create-button']`
  );

  messageBoxIssueCreate = By.xpath(`//span[starts-with(.,"You've created")]`);

  // method for CreateIssuePage

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectExist() {
    await this.driver.findElement(this.projectEviziTrainingManual).click();
  }

  public async clickCreateBtnTopHeader() {
    await this.driver.findElement(this.createIssueBtnTopHeader).click();
  }

  public async enterIssueInSummaryField(issueName: string) {
    await this.driver.findElement(this.summaryField).sendKeys(issueName);
  }

  public async clickCreateBtn() {
    await this.driver.findElement(this.createBtn).click();
  }

  public async messageBoxNewIssueCreateDisplays() {
    await this.driver.findElement(this.messageBoxIssueCreate).isDisplayed();
  }
}
