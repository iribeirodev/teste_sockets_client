var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io-client');
require('dotenv').config()

const port = process.env.PORT;

var socket = io.connect('https://teste-sockets-client.herokuapp.com:11700' , {reconnection: true});

socket.on('connect', function(socket){
	console.log('client connected');
});

socket.emit('CH01', 'TM_Data_Importer', 'hello');

http.listen(port, function () {
	console.log(`listening on *:${port}`);
});
