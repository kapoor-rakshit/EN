
var express = require("express");

var app = express();

var env = process.env.CONFIG_VAR;


if(env == "production"){
	app.set('title', "PRODUCTION");
}
else if(env == "development"){
	app.set('title', "DEVELOPMENT");
}
else{
	app.set('title', "OTHER");
}


app.get("/", function(request, response){
	
	if(env == "development") console.log("DEV");
	else console.log(env);

	response.send("Title of env is : " + app.get("title"));
});


app.listen(5000);

console.log("SERVER up and running at  'http://localhost:5000' ");