## puppeteer-test
![screenshot](https://github.com/eternaleight/puppteer-test/assets/96198088/27ea23c9-847d-4ef6-a53d-8e0d0ea6741e)

### index.js
```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // ビューポートの設定
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2, // デバイススケールファクターを2に設定(高解像度)
  });

  await page.goto('https://github.com/eternaleight');
  await page.screenshot({ path: 'screenshot.png', fullPage: true }); // fullPageオプションで全体のスクリーンショットを取得

  await browser.close();
})();
```
