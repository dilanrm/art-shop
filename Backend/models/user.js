"use strict";
const { Model } = require("sequelize");
const { encryptPwd } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product);
      user.hasMany(models.order);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name must not be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email must be not empty",
          },
          isEmail: {
            message: "Must email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Passqord must be not empty",
          },
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            message: "Birthdate must be not empty",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Gender must be not empty",
          },
        },
      },
      avatar: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Avatar must be not empty",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Type must be not empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPwd(user.password);
        },
        beforeUpdate: function (user, options) {
          user.password = encryptPwd(user.password);
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
