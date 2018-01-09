var db = require ("../models");

module.exports = function(app){

  app.get("/api/users", function(req, res){
    db.User.findAll({
      include: [db.Activities]
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Activities]
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });


  app.get("/api/test-make-fake-users", function(req, res){
    db.User.create({user_name: "Mr. T"});
    db.User.create({user_name: "Stone Cold Steve Austin"});
    db.User.create({user_name: "Mr. T"});
    db.User.create({user_name: "Mr. T"});
    db.User.create({user_name: "Mr. T"});
      res.json({done:true});
  });

  app.post("/api/users", function(req, res){
    db.User.create(req.body).then(function(dbUser){
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res){
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });

};
