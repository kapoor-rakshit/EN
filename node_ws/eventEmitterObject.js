
var eventemittervar = require("events").EventEmitter;
var utilvar = require("util");

function eventemitterfunc(){

	var msgemitter = this;

	setTimeout(function(){
	msgemitter.emit("beg");
	msgemitter.emit("msg", "At PNQ.");
	msgemitter.emit("msg", "GANPATI BAPA MORYA");
	msgemitter.emit("num", 14109025);
	},2000);

};

// .inherits(constructor, superConstructor)  :  Inherit the prototype methods from one constructor into another.
// The prototype of constructor will be set to a new object created from superConstructor.
utilvar.inherits(eventemitterfunc, eventemittervar);

module.exports = eventemitterfunc;