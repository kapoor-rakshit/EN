
var modulevar = require("./module");             // name of file to be imported


var callbackfunc = function(error, res){        // callback function

if(error) {
	console.log("ERROR : " + error.message);
	}
else{
	console.log("RESULT : " + res);
	}
};


modulevar.chkfunc(-55,-9,callbackfunc);

console.log(modulevar.varnaam);