'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {
      // Satu event memiliki banyak seat
      this.hasMany(models.seat, {
        foreignKey: "eventID",
        as: "eventSeat"
      });

      // Satu event memiliki banyak ticket
      this.hasMany(models.ticket, {
        foreignKey: "eventID",
        as: "eventTicket"
      });
    }
  }

  event.init({
    eventID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    venue: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });

  return event;
};