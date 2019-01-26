//Add dependencies
const connection = require('./connection');

const orm = {
    //Function to select all from a table
    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //Function to insert one row into a table
    insertOne: (tableName, columns, values, cb) => {
        const queryString = `
        INSERT INTO ?? 
            (??)
            VALUES (?)`;
        connection.query(queryString, [tableName, columns, values], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    //Function to update one item in a table
    updateOne: (tableName, whatToUpdate, rowIDValue, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ID = ?";
        connection.query(queryString, [tableName, whatToUpdate, rowIDValue], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

//Export the functions
module.exports = orm;