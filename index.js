const puppeteer = require('puppeteer')

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/nhasmim/')


    await page.waitForTimeout(5000)

    await browser.close()
})()