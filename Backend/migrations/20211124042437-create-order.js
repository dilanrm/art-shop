'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_name: {
        type: Sequelize.STRING
      },
      order_created_on: {
        type: Sequelize.DATE
      },
      order_subtotal: {
        type: Sequelize.INTEGER
      },
      order_discount: {
        type: Sequelize.INTEGER
      },
      order_tax: {
        type: Sequelize.INTEGER
      },
      order_total_due: {
        type: Sequelize.INTEGER
      },
      order_total_qty: {
        type: Sequelize.INTEGER
      },
      order_payt_trx_number: {
        type: Sequelize.STRING
      },
      order_email: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.STRING
      },
      order_userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('orders');
  }
};