import { By, WebDriver } from "selenium-webdriver";
import { String } from "typescript-string-operations";
export class ProjectTemplatesPage {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  //elements for project template page
  leftNavigator = By.xpath(
    `//div[starts-with(@data-testid, 'project-template-select') and contains(@data-testid, 'navigation')]`
  );

  leftNavigationItem =
    "//div[starts-with(@data-testid, 'project-template-select') and contains(@data-testid, 'navigation')]//button[.='{0}']";

  workManagementTemplateBtn = By.xpath(
    `//button[contains(@data-testid,'template-list-button') and @aria-label='Project management']`
  );

  createProjectsBtn = By.xpath(
    `//div[@data-test-id='project-create.create-screen-with-project-type-dropdown.submit-button']`
  );

  nameProjectManagementField = By.xpath(
    `//input[@id='project-create.create-form.name-field.input']`
  );

  //method for project template page
  public async openLeftMenu(item: String) {
    let leftNavigationItemLocator = String.format(
      this.leftNavigationItem,
      item
    );
    await this.driver.findElement(By.xpath(leftNavigationItemLocator)).click();
  }

  public async clickProjectManagementTemplate() {
    await this.openLeftMenu("Work management");
    await this.driver.findElement(this.workManagementTemplateBtn).click();
  }

  public async enterProjectNameForProjectManagement(nameProject: string) {
    await this.driver
      .findElement(this.nameProjectManagementField)
      .sendKeys(nameProject);
  }

  public async clickCreateProjectTemplateBtn() {
    await this.driver.findElement(this.createProjectsBtn).click();
  }
}
