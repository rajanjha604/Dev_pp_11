const fs = require("fs");
console.log(fs);

let fsdata = fs.readFileSync("./f1.txt");
console.log(fsdata+"");


// fs.writeFileSync("./myindex.html", "hello world!!!");
// fs.writeFileSync("../activity/activity.js", "this is only for the test purpose");