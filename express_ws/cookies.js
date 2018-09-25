
var express = require("express");

var cookieparser = require("cookie-parser");                          // required CookieParser

var app = express();

app.use(cookieparser());

var cookiecomp = require("./routes/cookie");
app.use("/", cookiecomp);


app.listen(5000);

console.log("SERVER up and running at http://127.0.0.1:5000");