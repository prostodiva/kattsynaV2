import { chromium } from "playwright";

export async function fetchPageText(url: string) {
    const browser = await chromium.launch({
        headless: true,
    });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "networkidle",
    });

    // extract visible text
    const text = await page.evaluate(() => {
        return document.body.innerText;
    });

    await browser.close();

    return text;
}