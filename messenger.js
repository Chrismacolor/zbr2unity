#!/usr/bin/env node

var express = require('express');
app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server,{ pingInterval: 2000,
    pingTimeout: 5000});

server.listen(8000)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

app.use("/TemplateData",express.static(__dirname + "webgltest3/TemplateData"));
app.use("/Build",express.static(__dirname + "webgltest3/Build"));
app.get('/', function (req, res) {
    res.sendFile(__dirname + 'webgltest3/index.html');
});


io.on('connect', (socket) => {
    rl.on('line', (input) => {
        socket.emit('process_data', input);
    });
});

io.on('disconnect', (socket) => {
    rl.close();
});

/* process.stdin.on('data', function(data) { process.stdout.pipe(process.stdout) })

io.on('connect', function(socket){

    process.stdout.on('data', function(data) {
        socket.emit('process_data', data);
    });
  })

function listener(socket) {
    process.stdout.on('data', function(data) {
        socket.emit('process_data', data);
    });
} */