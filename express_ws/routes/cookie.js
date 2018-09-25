
var express = require("express");

var router = express.Router();


router.get("/", function(request, response){
	if(request.cookies.cookiekey == "cookieval"){                                 // check if COOKIE key-val pair exists
		response.send("COOKIE ALREADY PRESENT , VISISTED THIS SITE EARLIER TOO");
	}
	else{
		response.cookie("cookiekey", "cookieval");                               // ADD COOKIE key-val pair
		response.send("COOKIE ADDED , FIRST VISIT TO SITE");
	}
});


router.get("/clear/", function(request, response){
	response.clearCookie("cookiekey");                                         // CLEAR COOKIE key
	response.redirect("/");                                                    // REDIRECT
});


module.exports = router;