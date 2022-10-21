import { By, until, WebDriver } from "selenium-webdriver";
import { elementIsVisible } from "selenium-webdriver/lib/until";

const userNameField = By.xpath(`//input[@id='username']`);
const userPasswordField = By.xpath(`//input[@id='password']`);
const clickContinue = By.xpath(`//button[@id='login-submit']`);
const result = By.xpath(`//button[.="Home"]`);

export class Login {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async setUserName(userName: string) {
    await this.driver.findElement(userNameField).sendKeys(userName);
    await this.driver.findElement(clickContinue).click();
  }

  public async setUserPassword(passWord: string) {
    await this.driver.wait(
      until.elementIsVisible(this.driver.findElement(userPasswordField))
    );
    await this.driver.findElement(userPasswordField).sendKeys(passWord);
    await this.driver.findElement(clickContinue).click();
  }

  public async Result() {
    await this.driver.findElement(result);
  }
}
