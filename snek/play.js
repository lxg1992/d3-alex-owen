const net = require('net');
const { connect } = require('./client');

/**
 * Establishes connection with the game server
 */

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = function(stdin) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {

      process.exit();
    }
  });
};

handleUserInput(setupInput());