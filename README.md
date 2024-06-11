## puppeteer-test
![screenshot](https://github.com/eternaleight/puppteer-test/assets/96198088/27ea23c9-847d-4ef6-a53d-8e0d0ea6741e)

### zsh
```
pnpm tsc
pnpm node dist/index.js 
```

### index.ts
```ts
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
    deviceScaleFactor: 2, // デバイススケールファクターを2に設定(高解像度)
  })

  // 指定したURLに移動
  await page.goto("https://github.com/eternaleight")

  // スクリーンショットを撮る
  await page.screenshot({ path: "screenshot.png", fullPage: true })

  // ブラウザを閉じる
  await browser.close()
})()
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./"
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}
```
