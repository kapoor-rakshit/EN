
var eventemitterobj = require("./eventEmitterObject");


var chk = new eventemitterobj();


chk.on("msg", function(rec){
	console.log("Received MESSAGE : " + rec);
});

chk.on("beg", function(){
	console.log("No arg eventemitter emitted");
});

chk.on("num", function(n){
	console.log("Number : " + n);
});


console.log("Working on emitter");