
var express = require("express");

var app = express();

var path = require("path");


app.set("view engine", "jade");
app.set("views", path.join(__dirname, "templates"));


app.get("/", function(request, response){
	response.render("home");
});

app.get("/login/", function(request, response){
	response.render("home2");
});

app.get("/signup/", function(request, response){
	response.render("issuecreate");
});


app.locals.CITY = "ATQ";                                                           // PERSISTENT variables
app.locals.NAME = {github : "kapoor-rakshit" , codechef : "kapoor_rakshit"};       // AVAILABLE in all templates as inited in index (root)


app.listen(5000);

console.log("SERVER up and running at http://127.0.0.1:5000");