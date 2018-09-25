
var express = require("express");

var router = express.Router();


router.get("/", function(request, response){
	response.render("issuecreate");
});


router.post("/data/", function(request, response){        // router.post : form action url where response is sent on SUBMIT
	response.render("issuedata", {
		desc : request.body.desc,
		sev : request.body.severity,
		stat : request.body.status,
		datecr : request.body.datecr,
		daters : request.body.daters
	});

});


module.exports = router;