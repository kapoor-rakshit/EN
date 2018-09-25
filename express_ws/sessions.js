
var express = require("express");

var session = require("express-session");            // Required for Session

var cookieparser = require("cookie-parser");

var app = express();

app.use(cookieparser());                             // for specifying   cookie : {maxAge : }

app.use(session({
	secret : "app-secret-key",     // The secret is used to hash the session with HMAC.
	                               // The session is then protected against session hijacking by checking the fingerprint against the hash with the secret

	resave : true,                 // tell the session store that particular session is active ,if session is idle (unused) ,prevent deletion

	saveUninitialized : true,     // at the end of the request, the session object will be stored in the session store

	cookie:{maxAge : 5000}                           // specify maximum session time
}));


var sessioncomp = require("./routes/session");
app.use("/", sessioncomp);


app.listen(5000);

console.log("SERVER up and running on http://localhost:5000");