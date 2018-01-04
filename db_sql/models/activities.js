module.exports = function(sequelize, DataTypes){
  var Activities = sequelize.define("Activities", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    was_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });

  Activities.associate = function(models){
    Activities.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activities;
};


// User.findAndCountAll({
//   include: [
//      { model: Profile, where: { active: true }}
//   ],
//   limit: 3
// });  (http://docs.sequelizejs.com/manual/tutorial/models-usage.html)


//eager loading to return all the children to the parent....
//User.findAll({ include: [ Task ] }).then(users => {
//   console.log(JSON.stringify(users))
  /*
    [{
      "name": "John Doe",
      "id": 1,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "tasks": [{
        "name": "A Task",
        "id": 1,
        "createdAt": "2013-03-20T20:31:40.000Z",
        "updatedAt": "2013-03-20T20:31:40.000Z",
        "userId": 1
      }]
    }]
  */
// })  http://docs.sequelizejs.com/manual/tutorial/models-usage.html
