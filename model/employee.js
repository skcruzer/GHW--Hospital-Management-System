const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {}

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
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    mobile: DataTypes.INTEGER,
    email: DataTypes.STRING,
    salary: DataTypes.INTEGER,
  },
  { 
    hooks: {
      beforeCreate: async (user) => {
        user.email = await user.email.toLowerCase()
        return user
      },
      beforeUpdate: async (user) => {
        user.email = await user.email.toLowerCase()
        return user
      }
    },
    sequelize, timestamps: false, modelName: "Employee" }
);

module.exports = Employee;
