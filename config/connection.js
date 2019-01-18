//Add dependencies
const mysql = require("mysql");
require('dotenv').config();

//Create mySQL connection variable
let connection;

if (process.env.JAWSDB_URL) {
    onnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: process.env.DATABASE_USERNAME,

        // Your password
        password: process.env.DATABASE_PASSWORD,
        database: "burgers_db"
    });
} l

//Export the connection
module.exports = connection;