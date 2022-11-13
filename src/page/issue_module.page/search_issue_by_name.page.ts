import { By, ByHash, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class SearchIssueByName extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for SearchIssueByName

  jiraWorkManagementBtn: ByHash = {
    xpath: `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`,
  };

  projectEviziTrainingManual = By.xpath(`//a[@href="/browse/TICKET"]`);

  issuesLeftNavigator = By.xpath(`//a[.="Issues"]`);

  searchField = By.xpath(`//input[@data-test-id="searchfield"]`);

  isIssueNameDisplays = By.xpath(`//td[.="TICKET-27"]`);

  // method for SearchIssueByName

  clickJiraWorkManagement = async () => {
    await this.click(this.jiraWorkManagementBtn);
  };

  public async clickProjectExist() {
    await this.driver.findElement(this.projectEviziTrainingManual).click();
  }

  public async clickIssuesItemLeftNavi() {
    await this.driver.findElement(this.issuesLeftNavigator).click();
  }

  public async enterNameIssue(issueName: string) {
    await this.driver.findElement(this.searchField).sendKeys(issueName);
  }

  public async isIssueNameDisplayed() {
    return this.driver.findElement(this.isIssueNameDisplays).isDisplayed();
  }
}
