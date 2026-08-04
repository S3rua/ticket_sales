"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    static associate(models) {
      // Satu ticket dimiliki oleh satu user
      this.belongsTo(models.user, {
        foreignKey: "userID",
      });

      // Satu ticket dimiliki oleh satu event
      this.belongsTo(models.event, {
        foreignKey: "eventID",
      });

      // Satu ticket dimiliki oleh satu seat
      this.belongsTo(models.seat, {
        foreignKey: "seatID",
      });
    }
  }

  ticket.init(
    {
      ticketID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eventID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      seatID: DataTypes.INTEGER,
      bookedDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ticket",
    }
  );

  return ticket;
};