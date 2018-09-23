
var http = require("http");


http.createServer(function(request, response){

	console.log("REQUSET : ", request.method, request.url);

	response.writeHead(200, {"Content-Type" : "text/html"});

	response.end("This is an HTTP server written from NODE at PNQ.");

}).listen(5000);


console.log("SERVER ready and running on  'localhost:5000' ");