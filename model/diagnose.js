// refer to appointment id!

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Employee = require("./employee");
const Patient = require("./patient");

class Diagnose extends Model {}

Diagnose.init({
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: "id",
    },
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: "id",
    },
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exams: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  treatment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prescribed_meds: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  modelName: "diagnose",
});

module.exports = Diagnose;
