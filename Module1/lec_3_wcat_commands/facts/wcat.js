const fs = require("fs");

let f1KaData = fs.readFileSync("./f1.txt", "utf-8");
let f2KaData = fs.readFileSync("./f2.txt", "utf-8");

// console.log(f1KaData+"");
// console.log(f2KaData+"");
//let bothOutput = f1KaData + "\n" + f2KaData;
//console.log(bothOutput+""); 

function applySFlag(f1KaData) {

    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1KaData.split("\r\n");
    console.log(splittedData);

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

let removedSpacesString = applySFlag(f1KaData);
console.log(removedSpacesString);

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

let bFlaggedString = applyBFlag(f1KaData);
console.log(bFlaggedString);


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

let NFlaggedString = applyNFlag(f1KaData);
console.log(NFlaggedString);