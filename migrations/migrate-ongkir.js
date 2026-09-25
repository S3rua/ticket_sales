'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ongkir', {
      subdistrict_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },

      province_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      province: {
        type: Sequelize.STRING,
        allowNull: false
      },

      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false
      },

      subdistrict_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ongkir');
  }
};