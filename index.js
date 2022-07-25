var io = require('socket.io-client');
require('dotenv').config()

const port = process.env.PORT;

var socket = io.connect('http://localhost:' + port, {reconnection: true});

socket.on('connect', function(socket){
	console.log('client connected');
});

socket.emit('CH01', 'TM_Data_Importer', 'hello');
