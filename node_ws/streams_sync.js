
var fs = require("fs");

console.log("Data : " + fs.readFileSync("./testfile.txt").toString());    // read file completely and then move to next line of code

console.log("Size : " + fs.statSync("./testfile.txt").size + " bytes");