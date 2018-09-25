
var express = require("express");

var path = require("path");

var bodyparser = require("body-parser");


var app = express();

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "templates"));


app.use(bodyparser.json());                               // for form data processing
app.use(bodyparser.urlencoded({extended: false}));


var issue = require("./routes/issue");

app.use("/", issue);

app.listen(5000);

console.log("SERVER up and running on http://localhost:5000");