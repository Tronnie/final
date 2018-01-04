module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    date_id: {
      type: DataTypes.STRING,
      allowNull: false, 
      len: [1]
    }, 
    was_accepted: {
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      len: [1]
    }
  });
  return Activity;
};
