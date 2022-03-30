const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Patient extends Model { } 

Patient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  sex: DataTypes.STRING,
  dob: DataTypes.DATE,
  mobile: DataTypes.INTEGER,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  primary_care_physician: DataTypes.STRING,
  pcp_contact: DataTypes.INTEGER,  
  insurance: DataTypes.STRING,

  //need to tie this w med history table
  //will grab all the med histories that references to this patient's id
  medical_history: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  //need to tie this w appt table
  //will grab all the appts that references to this patient's id
  appointments: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
}, { sequelize, timestamps: false, modelName: 'patient' })

module.exports = Patient
