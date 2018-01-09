// start with handler functions in loginroutes.js:

// First we create mysql connection using specifying the database of choice:

var mysql      = require('mysql');
// var bcrypt = require('bcrypt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'your-password',
  database : 'mental_app_db'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

//Then create handler for user registration:
//this runs a simple insertion query into mysql for adding new users to 
//database. The code keeps datetime for ‘created’ and ‘modified’ as current 
//datetime which can be set as per your needs.


exports.register = function(req,res){
  // console.log("req",req.body);
  
  var today = new Date();

  //If we are hashing the password npm install --save bcrypt
  //Modify the register handler in loginroutes.js to include:
  //bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }


  

  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered successfully"
        });
  }
  });


  // }
}


//In order to decrypt the password when user tries to login modify login handler in loginroutes.js as follows:
connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
  res.send({
      "code":400,
      "failed":"error occurred"
    })
  }else{
    if(results.length >0){
      bcrypt.compare(password, results[0].password, function(err, doesMatch){
        if (doesMatch){
     res.send({
       "code":200,
       "success":"login successful"
         });
      }else{
     res.send({
       "code":204,
       "success":"Email and password does not match"
         });
      }
    });
    }
    else{
      console.log('bcrypt in progress');
    }
  }
  });

//Next is handler for user login and validating user credentials:

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if([0].password == password){
        res.send({
          "code":200,
          "success":"login successful"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password do not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exist"
          });
    }
  }
  });
}