import { By, WebDriver } from "selenium-webdriver";

export class Projects {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  jiraWorkManagementBtn = By.xpath(
    `//button[contains(.,'Jira Work Management') and contains(.,'hungphan-training-fresher')]`
  );

  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  createProjectsBtn = By.xpath(`//button[starts-with(.,'Create project')]`);

  public async clickJiraWorkManagement() {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickCreateProject() {
    return this.driver.findElement(this.createProjectsBtn).click();
  }
}
