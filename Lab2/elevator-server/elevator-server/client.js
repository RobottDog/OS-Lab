'use strict';

const path = require('path');
const net = require('net');
// const Parser = require('./parser');
const EventEmitter = require('events');
const os = require('os');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});

module.exports = Client;