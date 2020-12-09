var http = require('http');
var app = require('./in');
http.createServer(app.handleRequest).listen(8000);
console.log('Server has Started…….at localhost:8000');