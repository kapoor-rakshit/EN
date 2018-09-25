
var express = require("express");

var router = express.Router();


router.get("/", function(request, response){
	response.send("EMPLOYEE HOME page");
});

router.get("/login/", function(request, response){
	response.send("EMPLOYEE LOGIN page.")
});

router.get("/home", function(request, response){
	response.redirect("/");                           // REDIRECT to "/" function(){}
});


module.exports = router;

