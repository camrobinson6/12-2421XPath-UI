const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

test("Google Search Test", async () => {
    await driver.get('https://www.google.com/')
   
    // let searchSelector = 
    
    await driver.findElement(By.css('[name="q"]')).sendKeys("Inception\n")

    // let searchBarElement =
    
    // await driver.findElement(By.css(searchSelector))

    // await searchBarElement.sendKeys('Inception \n')

    await driver.sleep(5000)
    
    await driver.quit()
})