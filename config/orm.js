//Add dependencies
const connection = require('./connection');

var orm = {
    //Function to select all from the burger table
    selectAll: (tableName) => {
        console.log("this is a test");
    },

    //Function to insert one burger
    insertOne: (tableName) => {
        console.log("this is a test2");
    },

    //Function to update one burger
    updateOne: (tableName) => {
        console.log("this is a test3");
    }
}

//Export the functions
module.exports = orm;