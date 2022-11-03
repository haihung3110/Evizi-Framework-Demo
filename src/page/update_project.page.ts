import { WebDriver, By } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../common/seleniumWebdriverWrapper";

export class UpdateProjectPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  //implement locator for UpdateProjectPage

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  moreBtnOfTestProjectTaskTrackingProject = By.xpath(
    `(//tr[td[.='TPTT']]/td)[last()]//button`
  );

  projectSettingsBtn = By.xpath(
    `//a[@href='/jira/core/projects/TPTT/settings']`
  );

  assigneeField = By.xpath(
    `//label[text()='Default assignee']//following-sibling::div`
  );

  itemAssigneeField = By.xpath(`//div[.='Project lead']`);

  saveBtn = By.xpath(`//button[.='Save']`);

  messageBoxDisplays = By.xpath(`//div[@role='alert']//span[.='Success!']`);

  //implement method for UpdateProjectPage

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectsTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickViewAllProjectBtn() {
    await this.driver.findElement(this.viewAllProjectsPageBtn).click();
  }

  public async clickMoreBtn() {
    await this.driver
      .findElement(this.moreBtnOfTestProjectTaskTrackingProject)
      .click();
  }

  public async clickProjectSettingsBtn() {
    await this.driver.findElement(this.projectSettingsBtn).click();
  }

  public async selectAssignField() {
    await this.driver.findElement(this.assigneeField).click();
  }

  public async selectItemAssigneeField() {
    await this.driver.findElement(this.itemAssigneeField).click();
  }

  public async clickSaveBtn() {
    await this.driver.findElement(this.saveBtn).click();
  }

  public async messageBoxUpdateDisplays() {
    await this.driver.findElement(this.messageBoxDisplays).isDisplayed();
  }
}
