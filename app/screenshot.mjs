import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('/workspace/.tmp/screenshots', { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 })
const page = await ctx.newPage()

async function shot(url, name) {
  await page.goto(`http://localhost:5176${url}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  const title = await page.title()
  await page.screenshot({ path: `/workspace/.tmp/screenshots/${name}.png`, fullPage: false })
  console.log(`${name}: title="${title}"`)
}

await shot('/agree', 'agree')
await shot('/home', 'home')
await shot('/mall/category/tea', 'category-tea')
await shot('/mall/category/teaware', 'category-teaware')

await browser.close()
