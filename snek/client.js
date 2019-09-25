const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('You have connected to the server');
  });

  // recieves data from the server, logs it to our console
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

//console.log('Connecting ...');


module.exports = { connect };
