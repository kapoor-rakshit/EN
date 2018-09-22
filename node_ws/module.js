
var temp = "NodeJs at PNQ Wipro.";

function chk(a,b,callbackfun_arg){
	if(a>b){
		callbackfun_arg(null, "a is bigger than b");                          // error arg passed as null
	}
	else{
		callbackfun_arg(new Error("a is not bigger than b"));                // passed Error
	}
}


module.exports.chkfunc = chk;             // variable names to be used in file where this module file imported
module.exports.varnaam = temp;