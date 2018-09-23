
// params are passed in code as  ':'   in code
// queries are passed in as '?'        in address bar


var express = require("express");

var app = express();


app.get("/employee/:roll/:name", function(request, response){

	response.send("ID of employee : " + request.params.roll + " Name of employee : " + request.params.name);
	
});


app.listen(5000);

console.log("SERVER up and running on  'http://localhost:5000' ");