const net = require('net');

const conn = net.createConnection({
  host: '172.46.3.255', // change to IP address
  port: 3000
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});

module.exports = { conn }