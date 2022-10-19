import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";

let driver: WebDriver;

export class loginPage {
  async goToLoginPage() {
    await driver.get(
      "https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252F7faa1f50-6795-4580-990d-f2cdb97e0605%26continue%3Dhttps%253A%252F%252Fhungphan-training-fresher.atlassian.net&application=jira"
    );
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
