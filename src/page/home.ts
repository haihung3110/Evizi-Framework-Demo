import { By, WebDriver } from "selenium-webdriver";

export class Home {
  driver: WebDriver;

  profileBtn = By.xpath(`//button[@data-testid="nav__profile-menu-trigger"]`);
  projectBtn = By.xpath(`//p[text()='Evizi-Hung-Training']`);

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

  public async isAtWorkPage() {
    return this.driver.findElement(this.projectBtn).isDisplayed();
  }
}
