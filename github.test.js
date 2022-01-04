const { Builder, Capabilities, By, until } = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

test("Github profile location", async () => {
    await driver.get('https://github.com/')

    let signin = await driver.findElement(By.css('[href="/login"]'))
    await signin.click()
    await driver.sleep(5000)

    let username = await driver.findElement(By.css('#login_field'))
    await username.sendKeys('camrobinson6@gmail.com')
    await driver.sleep(5000)

    let password = await driver.findElement(By.css('#password'))
    await password.sendKeys('Axl2018!')
    await driver.sleep(5000)

    let commit = await driver.findElement(By.css('[name="commit"]'))
    await commit.click()

    let userDropDown = await driver.findElement(By.xpath('(//span[@class="dropdown-caret"])[2]'))
    await userDropDown.click()
    await driver.sleep(5000)
    



   let yourProfileButton = await driver.findElement(By.xpath('//a[@data-hydro-click-hmac="e7e0dece5790eb93ffe9ce036e3056376c0e1dcb00d4db6a3c2615d0b1b4ce5d"]'))
   await yourProfileButton.click()
   await driver.sleep(5000)

   let editProfileButton = await driver.findElement(By.xpath('//button[@class="btn btn-block js-profile-editable-edit-button"]'))
   await editProfileButton.click()
   await driver.sleep(5000)


   let editLocation =await driver.findElement(By.xpath('//input[@name="user[profile_location]"]'))
   await editLocation.sendKeys('Lafayette, LA\n')
   await driver.sleep(5000)

   await driver.quit()
})




