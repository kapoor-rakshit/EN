
// params are passed in code as  ':'  in code
// queries are passed in as '?'       in address bar   eg:-  employee/?name=sopho&roll=14109025


var express = require("express");

var app = express();


app.get("/employee/", function(request, response){

	response.send("ID of employee : " + request.query.roll + " Name of employee : " + request.query.name);
	
});


app.listen(5000);

console.log("SERVER up and running on  'http://localhost:5000' ");