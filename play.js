const { connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();
setupInput(conn);

