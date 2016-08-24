var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send("About Us!")
});

// Get nodejs go inside public folder
app.use(express.static(__dirname + '/public'));
//console.log(__dirname); //Get server foder

// Tell browser to run on port 3000
app.listen(port, function(){
	console.log('Express server started at port:' + port);
});