const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on("connect", () => {
    // In the call back printing a message for the player to see
    console.log("We are connected sucessfully");
    //writing data to server upon connection  
    conn.write("Name: M.A");
    //conn.write("Move:up");
  });
  

  // conn.on("connect", () => {
  // });


  return conn;
};
console.log("Connecting ...");

module.exports = { connect };