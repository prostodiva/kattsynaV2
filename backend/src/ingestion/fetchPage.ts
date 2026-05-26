import { chromium } from "playwright";

function cleanText(text: string) {
    return text
        .replace(/©.*$/gm, "")
        .replace(/GET IN TOUCH|DOWNLOAD MY RESUME|Send Message/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

export async function fetchPageText(url: string) {
    const browser = await chromium.launch({
        headless: true,
    });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "networkidle",
    });

    const rawText = await page.evaluate(() => {
        const main =
            document.querySelector("main") ||
            document.querySelector("#root");
        return main?.innerText || document.body.innerText;
    });



    return cleanText(rawText);
}