const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
/* const Employee = require("./employee"); */

class EmpSched extends Model {}

EmpSched.init(
  {
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
  },
  {
    sequelize,
    timestamps: false,
    modelName: "empScheds",
  }
);

module.exports = EmpSched;
