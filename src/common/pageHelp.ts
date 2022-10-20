import {
  WebDriver,
  until,
  WebElementPromise,
  Locator,
  WebElement,
  Key,
} from "selenium-webdriver";

export class SeleniumWebdriverWrapper {
  constructor(private readonly driver: WebDriver) {}

  waitForCondition = async (condition: any) => this.driver.wait(condition);

  setScreenSize = async (width: number, height: number) => {
    await this.driver.manage().window().setSize(width, height);
  };

  maximizeWindow = async () => {
    await this.driver.manage().window().maximize();
  };

  findElement = async (locator: Locator): Promise<WebElementPromise> =>
    this.driver.findElement(locator);

  findElements = async (locator: Locator): Promise<any> =>
    await this.driver.findElements(locator);

  getUrl = async (url: string) => await this.driver.get(url);

  click = async (locator: Locator) =>
    await this.driver.findElement(locator).click();

  submit = async (locator: Locator) =>
    await this.driver.findElement(locator).submit();

  getValue = async (locator: Locator) =>
    await this.driver.findElement(locator).getText();

  getClassAttribute = async (element: WebElement) =>
    await element.getAttribute("class");

  setValue = async (locator: Locator, value: string) =>
    await this.driver.findElement(locator).sendKeys(value);

  clearFormField = async (locator: Locator) => {
    const element = await this.findElement(locator);
    const text = await element.getAttribute("value");
    const textLength = text.length;

    for (let i = 0; i < textLength; i++) {
      await element.sendKeys(Key.BACK_SPACE);
    }
  };

  pageRefresh = async () => await this.driver.navigate().refresh();

  executeJavascript = async (script: string, element: WebElement) =>
    await this.driver.executeScript(script, element);

  scrollElementToView = async (element: WebElement) =>
    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true); window.scrollBy(0, -window.innerHeight / 4);",
      element
    );
}
