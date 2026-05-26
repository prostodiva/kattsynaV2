import * as cheerio from "cheerio";

export function extractText(html: string) {
    const $ = cheerio.load(html);

    $("script, style, nav, footer, header").remove();

    const text = $("body").text();

    return text.replace(/\s+/g, " ").trim();
}