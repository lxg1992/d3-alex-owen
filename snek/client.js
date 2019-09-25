const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

  // when the server recieves a message with 'Name: xxx' format, it knows to create a new name associated with our connection
  conn.write('Name: OaA');

  // let time = 500;
  // let time2 = 500;
  // let time3 = 500;
  // for(let i = 500; i < 100000; i+= 500) {
    
  //   setTimeout(() => {
  //     conn.write('Move: up')
  //     setTimeout(() => {
  //       conn.write('Move: left')
  //       setTimeout(() => {
  //         conn.write('Move: down')
  //       }, time3 += 100);
  //     }, time2 += 100);
  //   }, time += 100);    
  // }

  return conn;
};

//console.log('Connecting ...');


module.exports = { connect };
