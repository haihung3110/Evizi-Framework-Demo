import { WebDriver, By } from "selenium-webdriver";

export class SearchProjectsByNamePage {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //implement for locator for SearchProjectsByName

  searchField = By.xpath(`//input[@name='search']`);

  projectPageLabel = By.xpath(``)

  //implement method for SearchProjectsByName

  public async isCurrentProjectPage() {
    await this.driver.findElement(this.projectPageLabel).isDisplayed();
  }
  
  public async enterNameProject(name: string) {
    await this.driver.findElement(this.searchField).sendKeys(name);
  }

  public async isProjectNameDisplayed() {
    await this.driver.findElement(this.projectPageLabel).isDisplayed();
  }

}