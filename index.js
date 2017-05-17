const express = require('express');

// setup express app
const app = express();

// initialize routes
app.use('/api',require('./routes/api'));

// listen for requests
app.listen(process.env.port || 8888, function(){
	console.log('Listening for requests...')
});


