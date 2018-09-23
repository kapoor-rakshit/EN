
var express = require("express");


var app = express();


var emp = require("./routes/employee");       // import route files
var cust = require("./routes/customer");


app.use("/", emp);                           // routes
app.use("/employees/", emp);
app.use("/customers/", cust);


app.listen(5055);

console.log("SERVER up and RUNNING on  'http://localhost:5055' ");