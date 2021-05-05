let fs = require("fs");

function getFilesData(files) {
    let filesData = "";
    for (let i = 0; i < files.length; i++) {
        if (!fs.existsSync(files[i])) {
            console.log(" one or more files do not exist");
            return;
        }
        if(i == files.length-1){
            filesData += fs.readFileSync(files[i])
        }else{
            filesData += fs.readFileSync(files[i]) + "\r\n";
        }
    }
    return filesData;
}
function applySFlag(f1KaData) {

    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1KaData.split("\r\n");
   // console.log(splittedData);

    for (i = 0; i < splittedData.length; i++) {
        if (splittedData[i] == "" && emptyIncluded == false) {
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        }
        else if (splittedData[i] != "") {
            removedSpaces.push(splittedData[i]);
            if (i < splittedData.length-2) emptyIncluded = false;
        }
       
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;

}

function applyBFlag(f1KaData){

    let count = 1;
    let splittedData = f1KaData.split("\r\n");
        for(let i=0; i<splittedData.length; i++)
        {
            if(splittedData[i] != "")
            {
                splittedData[i] = `${count}. ${splittedData[i]}`
                count++;
            }
        }
            console.log(splittedData);
            let bFlaggedString = splittedData.join("\r\n");
            return bFlaggedString;
}

function applyNFlag(f1KaData){
    
    let count=1;
    let splittedData = f1KaData.split("\r\n");
    for(let i=0; i<splittedData.length; i++)
    {
        splittedData[i] = `${count}. ${splittedData[i]}`;
        count++;
    }
    console.log(splittedData);
    let NFlaggedString = splittedData.join("\r\n");
    return NFlaggedString;
}
module.exports= {
    getFilesData : getFilesData,
    applySFlag : applySFlag,
    applyBFlag : applyBFlag,
    applyNFlag : applyNFlag
}