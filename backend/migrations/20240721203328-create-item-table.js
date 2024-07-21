'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      item_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      partNumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mark: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      manufacturer_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      locatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      measurement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      min_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      low_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      item_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_added: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      item_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      item_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  },
};