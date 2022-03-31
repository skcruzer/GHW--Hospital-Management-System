const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Patient = require("./patient");

class MedicalHistory extends Model {}

MedicalHistory.init({
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: "id",
    },
  },
  year: {
    type: DataTypes.TIMESTAMP,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surgeries: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medication: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  modelName: "Medicalhistory",
});

module.exports = MedicalHistory;
