function printReport(pages) {
    console.log("--------------------------------");
    console.log("------------REPORT--------------");
    console.log("--------------------------------");
    const sortedPages = sortPages(pages);

    for (const eachPage of sortedPages) {
        const pageURL = eachPage[0];
        const pageHits = eachPage[1];
        console.log(`Found ${pageHits} links to page ${pageURL}`);
    }
}

function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a, b) => {
        aHits = a[1];
        bHits = b[1];
        return b[1] - a[1];
    });

    return pagesArr;
}

module.exports = {
    sortPages,
    printReport,
};
