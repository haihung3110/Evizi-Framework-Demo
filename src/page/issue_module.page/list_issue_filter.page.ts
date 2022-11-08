import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class ListIssueFilterPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  // locator for ListIssueFilterPage

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  projectEviziTrainingManual = By.xpath(`//a[@href="/browse/TICKET"]`);

  issuesLeftNavigator = By.xpath(`//a[.="Issues"]`);

  filterWithType = By.xpath(`//button[.="Type"]//parent::div`);

  itemInTypeFilter = By.xpath(
    `//div[@data-testid="jql-builder-basic.ui.jql-editor.picker.async-select.select.option"]//div[.="Task"]`
  );

  taskFilterDisplays = By.xpath(
    `//button[@data-testid="jql-builder-basic.ui.jql-editor.picker.filter-button.type"]//span[.="Type:"]`
  );

  // method for ListIssueFilterPage

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectExist() {
    await this.driver.findElement(this.projectEviziTrainingManual).click();
  }

  public async clickIssuesItemLeftNavi() {
    await this.driver.findElement(this.issuesLeftNavigator).click();
  }

  public async clickFilterWithType() {
    await this.driver.findElement(this.filterWithType).click();
  }

  public async clickItemInTypeFilter() {
    await this.driver.findElement(this.itemInTypeFilter).click();
  }

  public async isTaskFilterDisplays() {
    await this.driver.findElement(this.taskFilterDisplays).isDisplayed();
  }
}
