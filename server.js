const express = require("express");
const bodyParser = require("body-parser");
let mysql = require('mysql');
const db = require('./db_sql/models');
const routes = require("./db_sql/routes/user-routes.js");
const app = express();
const PORT = process.env.PORT || 7500;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);




// Set up MySQL

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '0038ratdog',
	database: 'mental_app_db'
})

connection.connect(function(err) {
	if(err) throw err;
	console.log('you are now connected')
})

// // Get all Users
// app.get("/api/users", function(req,res){

// 	console.log(res)

// })


// Start the API server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

