//require("dotenv").config();
const mysql = require("mysql");
var connection = null;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "webuser",
    password: "UCR",
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;