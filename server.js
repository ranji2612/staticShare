var express = require('express');
var app = express();
var port = 5000
//Static Directory Specification
app.use(express.static(__dirname + '/sharedFiles'));
app.use(express.directory(__dirname + '/sharedFiles'));

app.use(express.logger());
app.use(express.errorHandler());

//Listenting to port
app.listen(port);
console.log('Server started listening to http://localhost:'+port);