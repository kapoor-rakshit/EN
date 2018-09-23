
var fs = require("fs");


fs.stat("./testfile.txt", function(error, stats){
	if(error){
		console.log("ERROR : ", error.code, error.message);
		return;
	}
	else{
		fs.readFile("./testfile.txt", function(error, data){
			if(error){
				console.log("ERROR : ", error.code, error.message);
				return;
			}
			else{
				console.log("DATA : ",data.toString());
			}
		});
		console.log("SIZE : ",stats.size,"bytes");
	}
});

console.log("ASYNC stats....");