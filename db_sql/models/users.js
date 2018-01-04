module.exports = function (sequelize, DataTypes){
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      paranoid: true
    }
  });

  User.associate = function(models){
    // associating user with activities
    User.hasMany(models.Activities, {
      onDelete: "cascade"
    });
  };

  return User;
};
