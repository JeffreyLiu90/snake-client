const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: "172.46.0.236",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SJL")
  })

  return conn;
  }


// connect();


module.exports = connect

// conn.on('connect', () => {
//   conn.write('Hello from Jeff!');
// });
