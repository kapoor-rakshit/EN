
var fs = require("fs");                                       // import builtin filesystem module

fs.createReadStream("./testfile.txt").pipe(process.stdout);   // pipe output to console