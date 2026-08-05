'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class diskon extends Model {
    static associate(models) {
      // isi kalau nanti ada relasi
    }
  }

  diskon.init({
    id_diskon: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_diskon: DataTypes.STRING,
    nominal_diskon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'diskon',
    tableName: 'diskon',
    timestamps: false
  });

  return diskon;
};