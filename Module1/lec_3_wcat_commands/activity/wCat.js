
const { getFilesData, applySFlag, applyBFlag, applyNFlag } = require("./util");

let contents = process.argv.slice(2);

//console.log(contents);

const flags = [];
const files = [];
for (let i = 0; i < contents.length; i++) {
    if (contents[i].startsWith("-")) {
        flags.push(contents[i]);
    }
    else {
        files.push(contents[i]);
    }
}

// console.log(flags);
// console.log(files);

let filesData = getFilesData(files);
//console.log(filesData);

if(flags.includes("-s")){
        filesData = applySFlag(filesData);
}

if(flags.includes("-b") && flags.includes("-n"))
{
    if(flags.indexOf("-b") < flags.indexOf("-n"))
    {
       filesData = applyBFlag(filesData);
    }
    else
    {
       filesData = applyNFlag(filesData);
    }
}
else if(flags.includes("-b"))
{
    filesData = applyBFlag(filesData);
}
else if(flags.includes("-n"))
{
    filesData = applyNFlag(filesData);
}
console.log(filesData);