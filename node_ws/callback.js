
var callbackfunc = function(error, res){                                    // callback function

if(error) {
	console.log("ERROR : " + error.message);
	}
else{
	console.log("RESULT : " + res);
	}
};

function chk(a,b,callbackfun_arg){
	if(a>b){
callbackfun_arg(null, "a is bigger than b");                                  // error arg passed as null
	}
	else{
		callbackfun_arg(new Error("a is not bigger than b"));                // passed Error
	}
}

chk(-550, -65, callbackfunc);                                            // params , callback_function