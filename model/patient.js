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

  //make references to medicalhistory model
  medical_history: {
    type: DataTypes.INTEGER,
    references: {
      model: 'medicalhistory',
      key: 'patient_id'
    }
  },

  //make references to appt model
  appointments: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Appointments',
      key: 'patient_id'
    }
  }
  
}, { sequelize, timestamps: false, modelName: 'patient' })

module.exports = Patient
