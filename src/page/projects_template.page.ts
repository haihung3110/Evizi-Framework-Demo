import { By, WebDriver } from "selenium-webdriver";

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

  nameProjectManagementField = By.xpath(
    `//input[@id='project-create.create-form.name-field.input']`
  );

  createProjectsBtn = By.xpath(
    `//div[@data-test-id='project-create.create-screen-with-project-type-dropdown.submit-button']//button[@type='button']`
  );

  projectNameLabel = By.xpath(
    `//nav[@aria-label='Breadcrumbs']//following::li//span`
  );

  /**
   * Determine whether we're on project was created.
   * Return: True if new project displayed. Otherwise, return False
   */

  public async isAtNewProjectDisplay() {
    return this.driver.findElement(this.projectNameLabel).isDisplayed();
  }

  // method for creating a new project
  public async clickWordManagementInTemplateLabel() {
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
