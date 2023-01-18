const net = require("net");



const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data)=> {
    // code that does something when the connection is first established
    console.log("You ded cuz you idled", data);
  });
  return conn;
};
console.log("Connecting ...");

module.exports = {connect}