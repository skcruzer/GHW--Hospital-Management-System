const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Employee extends Model { }

Employee.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  dob: DataTypes.DATEONLY,
  mobile: DataTypes.INTEGER,
  email: DataTypes.STRING,
  salary: DataTypes.INTEGER
}, { sequelize, timestamps: false, modelName: 'employee' })


module.exports = Employee
