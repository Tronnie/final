module.exports = function(sequelize, DataTypes){
  var Activities = sequelize.define("Activities", {
    
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
  }


  return Activities;
};


