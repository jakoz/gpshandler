//dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongoDB:
mongoose.connect("mongodb://kuba:test123@ds155820.mlab.com:55820/gpsdb");

//express:
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes:
app.use('/api', require('./routes/api'));

//start server:
app.listen(6969,"0.0.0.0");

console.log('Server is running on port 6969')