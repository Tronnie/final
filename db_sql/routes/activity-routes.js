var db = require("../models");

module.exports = function(app){

  // GET route for all
  app.get("/api/activities", function(req, res){
    var query = {};
    if (req.query.user_id){
      query.UserId = req.query.user_id;
    }
    //'includes' a left outer join for our user
    db.Activities.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbActivities){
      res.json(dbActivities);
    });
  });

  // GET route for a single
  app.get("/api/activities/:id", function(req, res){
    db.Activities.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbActivities){
      res.json(dbActivities);
    });
  });

  // POST route
  app.post("/api/activities", function(req, res){
    db.Activities.create(req.body).then(function(dbActivities){
      res.json(dbActivities);
    });
  });

  // DELETE route
  app.delete("/api/activities/:id", function(req, res){
    db.Activities.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbActivities){
      res.json(dbActivities);
    });
  });

};
