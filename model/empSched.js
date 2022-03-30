const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class EmpSched extends Model { } 

EmpSched.init({
  employee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'employee',
      key: 'id'
    }
  },
  start_time: {
    type: DataTypes.DATETIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.DATETIME,
    allowNull: false
  },
  patient_list: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Patient',
      key: 'id'
    }
  },
},
  {
    sequelize,
    timestamps: false,
    modelName: 'EmpSched'
  } 
)

module.exports = EmpSched