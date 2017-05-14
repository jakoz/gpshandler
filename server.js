//dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoDB:
mongoose.connect("mongodb://kuba:test123@ds155820.mlab.com:55820/gpsdb");
var http = require('http');
var qs = require('querystring');

http.createServer(function(request, response) {
    console.log(request.url);
    console.log(request.method);
    var body = '';
    request.on('data', function(data) {
        body += data;
    });
    request.on('end', function(data) {
        console.log(qs.parse(body));
    });

    response.end('');

    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //routes:
    app.use('/', require('./routes/api'));
}).listen(6969, "0.0.0.0");
//express:

// //start server:
// app.listen(6969, "0.0.0.0");

console.log('Server is running on port 6969')