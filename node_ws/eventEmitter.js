
var eventemittervar = require("events").EventEmitter;    // import builtin EventEmitter module


var eventemitterfunc = function(){                      // Publish eventemitter
	var msgemitter = new eventemittervar();

	setTimeout(function(){
	msgemitter.emit("beg");
	msgemitter.emit("msg", "At PNQ.");
	msgemitter.emit("msg", "GANPATI BAPA MORYA");
	msgemitter.emit("num", 14109025);
	},3000);
	
	return msgemitter;
};


var chk = eventemitterfunc();                          // Subscribe to  eventemitter

chk.on("msg", function(rec){
	console.log("Received : " + rec);
});

chk.on("beg", function(){
	console.log("No arg eventemitter");
});

chk.on("num", function(n){
	console.log("Number : " + n);
});