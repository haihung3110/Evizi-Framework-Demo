import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../common/seleniumWebdriverWrapper";

export class CreateIssuePage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for CreateIssuePage

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  nameProjectEviziTrainingManual = By.xpath(`//a[@href="/browse/TICKET"]`);

  createIssueBtnTopHeader = By.xpath(`//button[@id='createGlobalItem']`);

  summaryField = By.xpath(`//input[@name='summary']`);

  createBtn = By.xpath(
    `//button[@data-testid='issue-create.common.ui.footer.create-button']`
  );

  // method for CreateIssuePage

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectExist() {
    await this.driver.findElement(this.nameProjectEviziTrainingManual).click();
  }

  public async clickCreateBtnTopHeader() {
    await this.driver.findElement(this.createIssueBtnTopHeader).click();
  }

  public async enterIssueInSummaryField(issue: string) {
    await this.driver.findElement(this.summaryField).sendKeys(issue);
  }

  public async clickCreateBtn() {
    await this.driver.findElement(this.createBtn).click();
  }
}
