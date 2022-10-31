import { WebDriver, By } from "selenium-webdriver";

export class SearchProjectsByNamePage {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //implement for locator for SearchProjectsByName

  searchField = By.xpath(`//input[@name='search']`);


  isProjectsDisplayed = By.xpath(`//tr[td[.='']]//div[.='Evizi-Hung-Training']`);


  //implement method for SearchProjectsByName

  public async isCurrentProjectPage() {
    await this.driver.findElement(this.isProjectsDisplayed).isDisplayed();
  }

  public async enterNameProject(name: string) {
    await this.driver.findElement(this.searchField).sendKeys(name);
  }

  public async isProjectNameDisplayed(nameProjectInSearchField: string) {
    await this.driver
      .findElement(this.isProjectsDisplayed)
      .sendKeys(nameProjectInSearchField);
  }
}
