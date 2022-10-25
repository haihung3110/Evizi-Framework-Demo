import { World } from "cucumber";
import { By, WebDriver } from "selenium-webdriver";

export class Projects {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  jiraWorkManagementBtn = By.xpath(
    `//div[@data-testid='start-product__JIRA_BUSINESS_7faa1f50-6795-4580-990d-f2cdb97e0605']`
  );

  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  createProjectsBtn = By.xpath(`//button[starts-with(.,'Create project')]`);

  public async clickJiraWorkManagement(this: World) {
    await this.driver.findElement(this.jiraWorkManagementBtn).click();
  }

  public async clickProjectTopHead(this: World) {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickCreateProject(this: World) {
    await this.driver.findElement(this.createProjectsBtn).click();
  }
}
