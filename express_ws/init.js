
var express = require('express');


var app = express();


app.get("/", function(request, response){
	response.send("WELCOME to HOME");
});

app.get("/employees/", function(request, response){
	response.send("WELCOME to EMPLOYEES section");
});


app.listen(5050);

console.log("SERVER is up and running on  'http://localhost:5050' ");