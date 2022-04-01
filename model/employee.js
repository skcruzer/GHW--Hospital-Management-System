const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Employee extends Model {
  // set up method to run on instance data (per Employee) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    mobile: DataTypes.INTEGER,
    salary: DataTypes.INTEGER,
  },
  {
    hooks: {
      beforeCreate: async (newEmployeeData) => {
        newEmployeeData.password = await bcrypt.hash(
          newEmployeeData.password,
          10
        );
        return newEmployeeData;
      },
      beforeUpdate: async (updatedEmployeeData) => {
        updatedEmployeeData.password = await bcrypt.hash(
          updatedEmployeeData.password,
          10
        );
        return updatedEmployeeData;
      },
    },
    sequelize,
    timestamps: false,
    modelName: "Employee",
  }
);

module.exports = Employee;
