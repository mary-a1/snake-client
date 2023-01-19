// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;  // handles what happens when pressed
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // registers the key input
  connection = conn;
  return stdin;


};
const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
    console.log("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
    console.log("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
    console.log("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
    console.log("Move: right");
  }
  if (key === "l"){
    connection.write("Say: Don't CRASH ahaha");
  }
};

module.exports = { setupInput };