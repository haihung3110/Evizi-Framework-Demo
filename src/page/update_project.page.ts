import { WebDriver, By } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../common/seleniumWebdriverWrapper";

export class UpdateProjectPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  //implement locator for UpdateProjectPage

  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  moreBtn = By.xpath(`(//tr[td[.='TPTT']]/td)[last()]//button`);

  projectSettingsBtn = By.xpath(
    `//a[@href='/jira/core/projects/TPTT/settings']`
  );

  assigneeField = By.xpath(
    `//label[@id='default-assignee-uid37-label']//following-sibling::div`
  );

  itemAssigneeField = By.xpath(`//div[.='Project lead']`);

  saveBtn = By.xpath(`//button[.='Save']`);

  //implement method for UpdateProjectPage

  public async clickProjectsTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickViewAllProjectBtn() {
    await this.driver.findElement(this.viewAllProjectsPageBtn).click();
  }

  public async clickMoreBtn() {
    await this.driver.findElement(this.moreBtn).click();
  }

  public async clickProjectSettingsBtn() {
    await this.driver.findElement(this.projectSettingsBtn).click();
  }

  public async selectAssignField() {
    await this.driver.findElement(this.assigneeField).click();
  }

  
}
