'use strict';
module.exports = (sequelize, DataTypes) => {
  var Availabilty = sequelize.define('Availability', {
    availability_status: {
      type: DataTypes.ENUM,
      values: ['available', 'not_available'],
      defaultValue: 'available',
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  },{
    underscored: true
  });

Availabilty.associate = (models) => {
  // models.Availabilty.belongsTo(models.User, {
  //   foreignKey: {
  //     allowNull: false,
  //   }
  // });
};
  return Availabilty;
};
