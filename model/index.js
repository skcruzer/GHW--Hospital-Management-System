const router = require('express').Router()

const Employee = require('./employee')
const Diagnose = require('./diagnose')
const Appointments = require('./appointments')
const EmpSched = require('./empSched')
const MedicalHistory = require('./medicalhistory')
const Patient = require('./patient')

module.exports = { Employee, Patient, Appointments, EmpSched, MedicalHistory, Diagnose }
