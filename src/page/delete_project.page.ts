import { By, WebDriver } from "selenium-webdriver";
import { SeleniumWebdriverWrapper } from "../common/seleniumWebdriverWrapper";

export class DeleteProjectPage extends SeleniumWebdriverWrapper {
  constructor(driver: WebDriver) {
    super(driver);
  }

  //element for DeleteProjectPage
  projectsTopHeadBtn = By.xpath(`//button[.='Projects']`);

  viewAllProjectsPageBtn = By.xpath(
    `//div[@role='group']//a[@href='/jira/projects']`
  );

  moreBtn = By.xpath(`(//tr[td[.='TICKET']]/td)[last()]//button`);

  moveToTrashBtn = By.xpath(
    `//tr[contains(.,'TICKET')]//span[@role='img']//ancestor::button`
  );

  //implement method for DeleteProjectPage

  public async clickProjectsTopHead() {
    await this.driver.findElement(this.projectsTopHeadBtn).click();
  }

  public async clickViewAllProjectBtn() {
    await this.driver.findElement(this.viewAllProjectsPageBtn).click();
  }

  public async clickMoreBtn() {
    await this.driver.findElement(this.moreBtn).click();
  }

  public async clickMoveToTrashBtn() {
    await this.driver.findElement(this.moveToTrashBtn).click();
  }
}
