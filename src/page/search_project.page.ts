import { By, WebDriver } from "selenium-webdriver";

export class SearchProjectByFilterPage {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  // element for SearchProjectByFilterPage
  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(`//a[.='View all projects']`);

  filterProjects = By.xpath(`//div[text()='All Jira products']`);

  itemFromFilter = By.xpath(`//div[@id='react-select-17-option-3']`);

  projectNameLabel = By.xpath(
    `//nav[@aria-label='Breadcrumbs']//following::li//span`
  );

  // method for search project by filter

  public async isCurrentProjectCreated() {
    await this.driver.findElement(this.projectNameLabel).isDisplayed();
  }

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
}
