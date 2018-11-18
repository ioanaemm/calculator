const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.fromtheboxoffice.com");
  await page.screenshot({ path: "e2e/snapshots/ftbo_home.png" });

  await browser.close();
})();
