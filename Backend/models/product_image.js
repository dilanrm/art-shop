'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_image.belongsTo(models.product);
    }
  };
  product_image.init({
    filename: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Filename must not be empty"
        }
      }
    },
    filesize: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Filesize must not be empty"
        }
      }
    },
    filetype: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Filetype must be not empty"
        }
      }
    },
    primary: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          message: "Primary must not be empty"
        }
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "ProductId must be not empty"
        },
        isNumeric: {
          message: "ProductId must numeric"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'product_image',
  });
  return product_image;
};