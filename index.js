const express = require('express');

// setup express app
const app = express();

// listen for requests
app.listen(process.env.port || 8888, function(){
	console.log('Listening for requests...')
});

