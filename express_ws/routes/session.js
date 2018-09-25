
var express = require("express");

var router = express.Router();


router.get("/", function(request, response){
	response.send("Session ID : " + request.sessionID + "  " + "Session Name : " + request.session.name);
});


module.exports = router;