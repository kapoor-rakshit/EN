
var fs = require("fs");

var readstream = fs.createReadStream("./testfile.txt", {encoding: "utf8"});

var cnt = 0;

var readcallback = function(){

	var buffer;

	while(buffer = readstream.read()){
		console.log(++cnt + " : " + buffer);
	}
}

var endcallback = function(){
	console.log("EOF occurred. " + cnt);
}



readstream.on("readable",readcallback);             // while file is being read
 
readstream.on("end", endcallback);                  // when EOF occurs

console.log(fs.statSync("./testfile.txt").size + "b");   // since node works async , this will get logged first