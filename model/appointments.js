const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Employee = require("./employee");
const Patient = require("./patient");

class Appointments extends Model {}

Appointments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "id",
      },
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Patient,
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    complaint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Appointments",
  }
);

module.exports = Appointments;
