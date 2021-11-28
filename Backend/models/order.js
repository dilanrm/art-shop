'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      order.belongsTo(models.user)
      order.hasMany(models.line_item)
=======
      order.belongsTo(models.user);
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
    }
  };
  order.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name must be not empty"
        },
      }
    },
    createdOn: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          message: "CreatedOn must be not empty"
        }
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Subtotal must be not empty"
        },
        isNumeric: {
          message: "Subtotal must numeric"
        }
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          message: "Discount must numeric"
        }
      }
    },
    tax: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          message: "Tax must numeric"
        }
      }
    },
    total: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Total must be not empty"
        },
        isNumeric: {
          message: "Total must numeric"
        }
      }
    },
    total_qty: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Total Quantity must be not empty"
        },
        isNumeric: {
          message: "Total Quantity must numeric"
        }
      }
    },
    payt_trx_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Payment transaction must be not empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Email must be not empty"
        },
        isEmail: {
          message: "Must email format"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Status must be not empty"
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
    modelName: 'order',
  });
  return order;
};