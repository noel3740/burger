//Add dependencies
const mysql = require("mysql");

//Create mySQL connection variable
let connection;

if (process.env.JAWSDB_URL) {
    onnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: process.env.DATABASE_USERNAME,

        // Your password
        password: process.env.DATABASE_PASSWORD,
        database: "burgers_db"
    });
}

//Connection to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;