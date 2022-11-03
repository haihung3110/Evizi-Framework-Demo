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

  moreBtn = By.xpath(`(//tr[td[.='BDC']]/td)[last()]//button`);

  moveToTrashBtn = By.xpath(
    `//div[@data-test-id="projects-main.content.cells.actions.dropdown-menu-trash"]`
  );

  moveToTrashBtnFromMessageBox = By.xpath(
    ` //button[@data-test-id='project-soft-delete-modal.ui.modal-footer.move-to-trash-button-wrapper']`
  );

  messageBox = By.xpath(
    `//div[@data-testid='project-soft-delete-modal.ui.flags.moved-to-trash-success']`
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

  public async clickMoveToTrashBtnFromMessageBox() {
    await this.driver.findElement(this.moveToTrashBtnFromMessageBox).click();
  }

  public async messageBoxDisplays() {
    await this.driver.findElement(this.messageBox).isDisplayed();
  }
}
