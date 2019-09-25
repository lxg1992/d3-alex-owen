let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin,connection);
  return stdin;
};

const handleUserInput = function(stdin,connection) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {

      process.exit();
    };
    console.log(key);
    switch(key){
      case 'w':        
        connection.write('Move: up');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'd':
        connection.write('Move: right');
        break;
      case 'a':
        connection.write('Move: left');
        break;
      case 'r':
        connection.write('Say: YOU');
        break;
      case 't':
        connection.write('Say: ARE');
        break;
      case 'y':
        connection.write('Say: BAD');
        break;
      case 'o':
        connection.write('Say: git gud bud');
        break;
      
    }
  });
};



module.exports =  {setupInput};