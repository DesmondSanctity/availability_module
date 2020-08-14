'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    underscored: true
  });

Role.associate = (models) => {
  models.Role.hasMany(models.User);
};
  

  return Role;
};
