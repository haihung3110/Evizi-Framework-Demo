import { WebDriver, By } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../../common/seleniumWebdriverWrapper";

export class SearchProjectsByNamePage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  //implement locator for SearchProjectsByName

  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  searchField = By.xpath(`//input[@name='search']`);

  isProjectsDisplayed = By.xpath(
    `//tr[td[.='']]//div[.='Evizi-Hung-Training']`
  );

  //implement method for SearchProjectsByName

  public async clickProjectsTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickViewAllProjectBtn() {
    await this.driver.findElement(this.viewAllProjectsPageBtn).click();
  }

  public async enterNameProject(name: string) {
    await this.driver.findElement(this.searchField).sendKeys(name);
  }

  public async isProjectNameDisplayed() {
    await this.driver.findElement(this.isProjectsDisplayed).isDisplayed()
  }
}
