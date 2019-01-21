//Add dependencies
require('dotenv').config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

//Set port server will be listing on
var PORT = process.env.PORT || 8080;

//Initialize the express app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setup express to use the routes setup in the controller
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});