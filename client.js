const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: "172.46.0.236",
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data)
  })
   
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {  //connect to the server and do below
    console.log("Successfully connected to game server"); // says you're connected on terminal
    conn.write("Name: SJL") // your initials are on the game
   
  })
    

    // conn.on('connect', () => {

    //   setInterval(() => {
    //     conn.write("Move: up") // print out the words 
    //   }, 50)

    // })
    


  return conn;
  }


//   "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
// connect();


module.exports = connect

// conn.on('connect', () => {
//   conn.write('Hello from Jeff!');
// });
