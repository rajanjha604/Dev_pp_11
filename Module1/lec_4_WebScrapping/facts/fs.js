const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html", "utf-8");

//console.log(h1KaData);

// html file is loaded in cheerio
let myDocument = cheerio.load(htmlKaData);

//console.log(myDocument);

// document.querySelector("h1");
//let h1KaData = myDocument("h1");

let h1KaData = myDocument("h1").text();
console.log(h1KaData);