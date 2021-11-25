'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('line_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lite_qty: {
        type: Sequelize.INTEGER
      },
      lite_status: {
        type: Sequelize.STRING
      },
      lite_prod_id: {
        type: Sequelize.INTEGER
      },
      lite_shop_id: {
        type: Sequelize.INTEGER
      },
      lite_order_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('line_items');
  }
};