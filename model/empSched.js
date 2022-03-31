const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Employee = require("./employee");

class EmpSched extends Model {}

EmpSched.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "id",
      },
    },
    start_time: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
    /* patient_list: {
      type: DataTypes.INTEGER,
      references: {
        model: Patient,
        key: "id",
      },
    }, */
  },
  {
    sequelize,
    timestamps: false,
    modelName: "EmpSched",
  }
);

module.exports = EmpSched;
