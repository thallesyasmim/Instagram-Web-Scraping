const puppeteer = require('puppeteer')
const fs = require('fs')

async function start() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/nhasmim/')


    const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('article.ySN3v img')

        const imgArray = [...nodeList]

        const imgList = imgArray.map(({ src }) => ({ src }))

        return imgList
    })

    await browser.close()

    console.log(imgList)
}

start()