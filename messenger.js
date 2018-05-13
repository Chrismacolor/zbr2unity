#!/usr/bin/env node

var io = require('socket.io').listen(8000);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.on('connect', function(socket){
    rl.on('line', (input) => {
        socket.emit('process_data', input);
    });
});

io.on('disconnect', function(socket){
    rl.close
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