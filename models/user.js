'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAplha: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAplha: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
        isLowercase: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        len: [8, 50], //password cant be less than 8 characters
      }
    },
    last_login: {
      type: DataTypes.DATE
    },
  }, {
    underscored: true
  });

  User.associate = (models) => {
    models.User.belongsTo(models.Role, {
      foreignKey: {
        allowNull: false,
      }
    });
    models.User.belongsTo(models.Department, {
      foreignKey: {
        allowNull: false,
      }
    });
    models.User.belongsTo(models.Current_business, {
      foreignKey: {
        allowNull: false,
      }
    });
    models.User.hasMany(models.Availability);
  };
  return User;
};
