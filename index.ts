import puppeteer, { Browser, Page } from "puppeteer"

;(async () => {
  // ブラウザの起動
  const browser: Browser = await puppeteer.launch({ headless: true })
  // 新しいページを開く
  const page: Page = await browser.newPage()

  // ビューポートの設定
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2, // デバイススケールファクターを2に設定
  })

  // 指定したURLに移動
  await page.goto("https://github.com/eternaleight")

  // スクリーンショットを撮る
  await page.screenshot({ path: "screenshot.png", fullPage: true })

  // ブラウザを閉じる
  await browser.close()
})()
