'use strict';
module.exports = (sequelize, DataTypes) => {
  var Current_business = sequelize.define('Current_business', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    underscored: true
  });

Current_business.associate = (models) => {
  models.Current_business.hasMany(models.User);
};
  

  return Current_business;
};
