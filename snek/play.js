//const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input.js');

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
//connect();

setupInput(connect());



//handleUserInput(setupInput());  