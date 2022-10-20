import { By, WebDriver } from "selenium-webdriver";

let driver: WebDriver;

export class loginPage {
  async goToLoginPage() {
    await driver.get("https://id.atlassian.com/login");
  }

  async setUserName(userName: string) {
    await driver
      .findElement(By.xpath(`//input[@id='username']`))
      .sendKeys(userName);
  }

  async clickContinueBtn() {
    await driver.findElement(By.xpath(`//button[@id='login-submit']`)).click();
  }

  async setUserPassword(password: string) {
    await driver
      .findElement(By.xpath(`//input[@id='password']`))
      .sendKeys(password);
  }

  async clickLoginBtn() {
    await driver.findElement(By.xpath(`//button[@id='login-submit']`)).click();
  }
}
