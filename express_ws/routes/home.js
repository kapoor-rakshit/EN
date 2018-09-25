
var express = require("express");

var router = express.Router();


router.get("/", function(request,response){
	response.render("home", {                                // NOTE : use of response.render  and  not response.send
		tvar : "WIPRO NODE JS program",
		tpvar : "Going great.."                             // Pass values from .js to .jade (template)
	});
});

router.get("/:pageid/", function(request, response){        // "/:pageidparam/"   RENDER template (.jade) based on param in url
	response.render(request.params.pageid);
});


module.exports = router;