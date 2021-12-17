const {shuffleArray} = require('./utils')
const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/public/index.html')    
})


afterAll(async () => {
    await driver.quit()
})



describe('shuffleArray should', async () => {
     
}) 



// describe('shuffleArray should', async () => {
//     await shuffleArray(driver, 'See All Bots') //come back to this. I want to make a test that clicks the "See All Bots" button...
// }) 