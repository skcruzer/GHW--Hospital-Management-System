// refer to appointment id! 

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Diagnose extends Model { }


Diagnose.init({
    doc_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exams: {
        type: DataTypes.STRING,
        allowNull: false
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prescribed_meds: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sequelize,
    modelName: 'diagnose'
})

module.exports = Diagnose