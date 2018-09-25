
var express = require("express");

var path = require("path");


var app = express();


app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "jade");


app.use(express.static(path.join(__dirname, "static")));       // DIR for CSS files


var styletest = require("./routes/test");
app.use("/", styletest);


app.listen(5000);

console.log("SERVER up and running on http://localhost:5000");