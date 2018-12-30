const puppeteer = require("puppeteer");

let browser;
let page;

async function signIn() {
  await page.waitForSelector(".gmail-nav__nav-link__sign-in");
  await page.click(".gmail-nav__nav-link__sign-in");
}

async function typeEmail(email) {
  await page.waitForSelector("input[type=email]");
  await delay(500);
  await page.type("input[type=email]", email, {
    delay: 2
  });
  await page.click("#identifierNext");
}

async function typePassword(password) {
  await page.waitForSelector("input[type=password]");
  await delay(500);
  await page.type("input[type=password]", password, { delay: 2 });
  await page.click("#passwordNext");
}

async function openComposer() {
  const selector = ".T-I.J-J5-Ji.T-I-KE.L3";
  await page.waitForSelector(selector);
  await delay(2000);
  page.keyboard.type("C");
  // await page.hover(selector);
  await delay(500);
  // await page.click(selector);
}

async function delay(amount) {
  await new Promise(resolve => setTimeout(resolve, amount));
}

async function pageSetup(url) {
  // launch the browser
  browser = await puppeteer.launch({
    headless: false
  });

  // open a new page
  page = await browser.newPage();

  page.setViewport({ width: 1366, height: 700 });
  await page.goto(url);
}

async function init() {
  await pageSetup("https://www.google.com/gmail/about/#identifier");
  await signIn();
  await typeEmail("miteleaioana@gmail.com");
  await typePassword("78ascarianus23");
}

init();
