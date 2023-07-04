const { crawlPage } = require("./crawl.js");
const { printReport } = require("./report.js");

async function main() {
    if (process.argv.length < 3) {
        console.log("no website provided");
        process.exit(1);
    }
    if (process.argv.length > 3) {
        console.log("too many command line arguements");
        process.exit(1);
    }

    const inputURL = process.argv[2];
    let baseURL;

    try {
        const urlObj = new URL(inputURL);
        baseURL = urlObj.href;
        if (baseURL.length > 0 && baseURL.slice(-1) === "/") {
            baseURL = baseURL.slice(0, -1);
        }
    } catch (err) {
        console.log(`base url ${inputURL} was deemed invalid with error ${err.message}`);
    }

    console.log(`starting crawl of ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {});
    printReport(pages);
}

main();
