
var express = require("express");
var path = require("path");
var app = express();


var notfound = function(request, response, next){

	response.statusCode = 404;                                          // handle error based on code(s)
	response.send("ERROR : 404 Page not found :)");

	//response.render("page404")
};

var internalerror = function(error, request, response, next){

	response.statusCode = 500;
	response.send("ERROR : 500 INTERNAL error :)");
	next(error);

	// response.render("page500");
};


app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "jade");


app.get("/home", function(request, response){
	response.render("homescreen");
});


app.use(notfound);                         // app uses these error defn(s)
app.use(internalerror);          // NOTE : write these error use statements after all the .get()/.use() ,else app uses them always default


app.listen(5000);

console.log("SERVER up and running at http://localhost:5000");