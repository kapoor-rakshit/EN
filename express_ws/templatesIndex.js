
var express = require("express");

var path = require("path");


var app = express();

app.set("view engine", "jade");                                     // view engine
app.set("views", path.join(__dirname, "templates"));                // DIR where template (.jade) files are kept

var home = require("./routes/home");

app.use("/", home);

app.listen(5000);

console.log("SERVER up and running on http://127.0.0.1:5000");