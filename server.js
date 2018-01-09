
const express = require("express");
const bodyParser = require("body-parser");
let mysql = require('mysql');
const db = require('./db_sql/models');
const routes = require("./db_sql/routes/user-routes.js");
const app = express();
const PORT = process.env.PORT || 7500;



// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));



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

// Routes
// =============================================================
require("./routes/activity-routes.js")(app);
require("./routes/user-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
>>>>>>> 5192622b7d6ce7830bace3e510ab5788493d0ca3
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

