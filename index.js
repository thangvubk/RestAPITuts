const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promiss = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./routes/api'));

// listen for requests
app.listen(process.env.port || 8888, function(){
	console.log('Listening for requests...')
});


