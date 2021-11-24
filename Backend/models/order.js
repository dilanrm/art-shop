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
      order.belongsTo(models.user)
    }
  };
  order.init({
    order_name: DataTypes.STRING,
    order_created_on: DataTypes.DATE,
    order_subtotal: DataTypes.INTEGER,
    order_discount: DataTypes.INTEGER,
    order_tax: DataTypes.INTEGER,
    order_total_due: DataTypes.INTEGER,
    order_total_qty: DataTypes.INTEGER,
    order_payt_trx_number: DataTypes.STRING,
    order_email: DataTypes.STRING,
    order_status: DataTypes.STRING,
    order_userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};