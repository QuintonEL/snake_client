// Setup User Interface 
// Specifically, so that we can handle user input via stdin
// Stores the active TCP connection object.
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(key) {
    const cannedMsg = ['GG', 'EZ CLAP', 'GIT GOOD', 'GG NO RE',];
    if (key === '1') {
      conn.write(`Say: ${cannedMsg[0]}`);
    }
    if (key === '2') {
      conn.write(`Say: ${cannedMsg[1]}`);
    }
    if (key === '3') {
      conn.write(`Say: ${cannedMsg[2]}`);
    }
    if (key === '4') {
      conn.write(`Say: ${cannedMsg[3]}`);
    }
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
  }
    if (key === 'a') {
      conn.write('Move: left');
  }
    if (key === 's') {
      conn.write('Move: down');
  }
    if (key === 'd') {
      conn.write('Move: right');
  }
  }
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };