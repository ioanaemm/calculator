import React from "react";
import puppeteer from "puppeteer";

let browser;
let page;

describe("renders without crashing", () => {
  beforeEach(async () => {
    // launch the browser
    browser = await puppeteer.launch({
      headless: false
    });

    // open a new page
    page = await browser.newPage();

    // navigate to our app
    await page.goto("http://localhost:3000");

    // wait for the page to load
    await page.waitForSelector("button.plus");
  });

  afterEach(() => {
    browser.close();
  });

  test("the initial result is 0", async () => {
    const result = await page.$eval(".result", e => e.innerHTML);
    expect(result).toEqual("0");
  }, 6000);

  test("numbers are clickable", async () => {
    for (let i = 0; i <= 9; i++) {
      await page.click(`.number-${i}`);
    }
    const result = await page.$eval(".result", e => e.innerHTML);
    expect(result).toEqual("123456789");
  }, 6000);
});
