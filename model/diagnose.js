// refer to appointment id!

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Diagnose extends Model {}

Diagnose.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },    
    diagnosis: DataTypes.STRING,
    exams: DataTypes.STRING,
    treatment: DataTypes.STRING,
    prescribed_meds: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "diagnoses",
  }
);

module.exports = Diagnose;
