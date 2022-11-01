import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../common/seleniumWebdriverWrapper";

export class SearchProjectByFilterPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }
  // element for SearchProjectByFilterPage
  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  filterProjects = By.xpath(`//div[text()='All Jira products']`);

  itemFromFilter = By.xpath(`//div[text()='Jira Work Management']`);

  projectNameLabel = By.xpath(
    `//nav[@aria-label='Breadcrumbs']//following::li//span`
  );

  filterLabel = By.xpath(`//div[text()='Jira Work Management']`);

  // method for search project by filter

  public async clickProjectsTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickViewAllProjectBtn() {
    await this.driver.findElement(this.viewAllProjectsPageBtn).click();
  }

  public async openFilterProjectsItems() {
    await this.driver.findElement(this.filterProjects).click();
  }

  public async selectItemFormFilter() {
    await this.driver.findElement(this.itemFromFilter).click();
  }

  public async isDisplayProjectsByFilter() {
    await this.driver.findElement(this.filterLabel).isDisplayed();
  }
}
