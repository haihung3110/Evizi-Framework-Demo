import {
  WebDriver,
  until,
  WebElementPromise,
  Locator,
  WebElement,
  Key
} from "selenium-webdriver";
import { elementWaitTimeOutValue } from "../common/timeouts";

export class SeleniumWebdriverWrapper {
  static waitUntilPageElementsLoadedAndDisplayed: any;
  constructor(protected readonly driver: WebDriver) {}

  public async waitUntilElementLoadedAndDisplayed(
    locator: Locator
  ): Promise<any> {
    const locatorValue = JSON.stringify(locator);
    this.driver.wait(
      until.elementLocated(locator),
      elementWaitTimeOutValue,
      `Element not located: ${locatorValue}`
    );
    this.driver.wait(
      until.elementIsVisible(this.driver.findElement(locator)),
      elementWaitTimeOutValue,
      `Element not visible: ${locatorValue}`
    );

    return this.driver.findElement(locator);
  }

  waitForCondition = async (condition: any) => this.driver.wait(condition);

  waitUntilPageElementsLoadedAndDisplayed = async (
    locators: Array<any>
  ): Promise<WebElementPromise> => {
    let elements;
    elements = locators.map(
      async (locator) => await this.waitUntilElementLoadedAndDisplayed(locator)
    );

    return (Promise as any).all(elements);
  };

  waitForElementInVisible = async (locator: Locator): Promise<any> =>
    await this.driver.wait(
      async () => (await this.driver.findElements(locator)).length === 0,
      elementWaitTimeOutValue,
      `Element not invisible: ${JSON.stringify(locator)}`
    );

  scrollElementToView = async (element: WebElement) =>
    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true); window.scrollBy(0, -window.innerHeight / 4);",
      element
    );

  clearFormField = async (locator: Locator) => {
    const element = await this.driver.findElement(locator);
    const text = await element.getAttribute("value");
    const textLength = text.length;

    for (let i = 0; i < textLength; i++) {
      await element.sendKeys(Key.BACK_SPACE);
    }
  };

  maximizeWindow = async () => {
    await this.driver.manage().window().maximize();
  };

  click = async (locator: Locator) =>
    await this.driver.findElement(locator).click();
}
