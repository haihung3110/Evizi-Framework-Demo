const { Builder, By, Key, util } = require("selenium-webdriver")
require('chromedriver');

async function openBrowser(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://id.atlassian.com/login")
    // await driver.findElement(By.name("q")).sendKeys(Key.RETURN);
}

openBrowser();