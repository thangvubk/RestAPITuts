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


//error handling middleware
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

// listen for requests
app.listen(22, function(){
	console.log('Listening for requests...')
});


