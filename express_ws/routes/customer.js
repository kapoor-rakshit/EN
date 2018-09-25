
var express = require("express");

var router = express.Router();


router.get("/", function(request, response){
	response.send("CUSTOMER HOME page");
});

router.get("/signup/", function(request, response){
	response.send("CUSTOMER SIGNUP page.")
});

router.get("/*", function(request, response){       // If all above fail , match anything after "/" to send this response
	response.send("404 : Page not Found");
});


module.exports = router;                           // export

