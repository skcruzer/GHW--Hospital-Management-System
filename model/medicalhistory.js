const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MedicalHistory extends Model {}

MedicalHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    year: DataTypes.DATEONLY,
    condition: DataTypes.STRING,
    surgeries: DataTypes.STRING,
    medication: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps:false,
    modelName: "medicalhistories",
  }
);

module.exports = MedicalHistory;
