const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const { each } = require('cheerio/lib/api/traversing');
const { url } = require('inspector');

// const fetch_url = document.URL
// console.log(fetch_url);

request('https://login.salesforce.com/?locale=in', (error, response, html) => {
    if(!error && response.statusCode ==200){
        // console.log(html)
        const $ = cheerio.load(html);

        const siteHeading = $('.idcard-container');
        // console.log(siteHeading.html())
        // console.log(siteHeading.text())

        const output = siteHeading.children('input')
        // console.log(output);

        // ---------------------------------- Looping ---------------------------
        // $('.nav-item a').each((i,el) =>{
        //     const item = $(el).text();
        //     console.log(item)
        // })
        // ======================================================================
    
        // ------------>> Write Row to CSV -------------------
        fs.writeFileSync("name.csv",`Names : ${output}`)
        // ------------>> Write Row to Txt -------------------
        fs.writeFileSync("name.txt",`Names : ${output}`)
    }
    console.log("Sreaming Done...");
})