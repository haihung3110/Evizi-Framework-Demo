import { By, WebDriver } from "selenium-webdriver";

export class Home {
  driver: WebDriver;

  profileBtn = By.xpath(`//button[@data-testid="nav__profile-menu-trigger"]`);

  projectNameLabel = By.xpath(`//nav[@aria-label='Breadcrumbs']//following::li//span`)

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  /**
   * Determine whether we're on Login Page or not.
   * Return: True if Login page with profile button is displayed. Otherwise, return False
   */
  public async isAt() {
    return this.driver.findElement(this.profileBtn).isDisplayed();
  }

  /**
   * Determine whether we're on project was created.
   * Return: True if new project displayed. Otherwise, return False
   */

  public async isAtNewProjectDisplay() {
    return this.driver.findElement(this.projectNameLabel).isDisplayed();
  }
}
