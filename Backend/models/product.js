'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.user);
    }
  };
  product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name must be not empty"
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Description must be not empty"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Price must not be empty"
        },
        isNumeric: {
          message: "Price must numeric"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Stock must be not empty"
        },
        isNumeric:{
          message: "Stock must numeric"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Category must be not empty"
        }
      }
    },
    sold: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Sold must be not empty"
        },
        isNumeric: {
          message: "Sold must numeric"
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Rating must be not empty"
        },
        isNumeric: {
          message: "Rating must numeric"
        }
      }
    },
    view: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "View must be not empty"
        },
        isNumeric: {
          message: "View must numeric"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "UserId must be not empty"
        },
        isNumeric: {
          message: "UserId must numeric"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};