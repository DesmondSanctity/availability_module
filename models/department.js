'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    underscored: true
  });

Department.associate = (models) => {
  models.Department.hasMany(models.User);
};
  

  return Department;
};
