const setupInput = function (conn) {
  const stdin = process.stdin;  // handles what happens when pressed
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // registers the key input

  return stdin;

  
};
const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

module.exports = { setupInput }