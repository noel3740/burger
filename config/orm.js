const connection = require('./connection');

//Connection to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  //Function to select all from the burger table
  function selectAll() {
      console.log("this is a test");
  }

  //Function to insert one burger
  function insertOne() {
    console.log("this is a test2");
  }

  //Function to update one burger
  function updateOne() {
    console.log("this is a test3");
  }

  //Export the functions
  module.exports = { 
      selectAll,
      insertOne,
      updateOne
    };