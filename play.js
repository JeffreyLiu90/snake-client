const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect= require('./client');
// console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', (handleUserInput) => {
    if(handleUserInput === '\u0003') {
      process.stdout.write("Goodbye friend!\n")
        process.exit()
      } 
      stdin.resume();
  return stdin;
  
})}


setupInput()