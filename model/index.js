const router = require("express").Router();

const Employee = require("./employee");
const Diagnose = require("./diagnose");
const Appointments = require("./appointments");
const EmpSched = require("./empSched");
const MedicalHistory = require("./medicalhistory");
const Patient = require("./patient");

//linking employee to shedule, appointment
Employee.hasMany(EmpSched, {
  foreignKey: "employees_id",
  onDelete: "CASCADE",
});
EmpSched.belongsTo(Employee, {
  foreignKey: "employees_id",
});
Employee.hasMany(Appointments, {
  foreignKey: "employees_id",
  onDelete: "CASCADE",
});
Employee.hasMany(Diagnose, {
  foreignKey: "employees_id",
  onDelete: "CASCADE",
});

//linking Patient to diagnose, medical history and appointment
Patient.hasMany(Appointments, {
  foreignKey: "patients_id",
  onDelete: "CASCADE",
});
Patient.hasMany(MedicalHistory, {
  foreignKey: "patients_id",
  onDelete: "CASCADE",
});
MedicalHistory.belongsTo(Patient, {
  foreignKey: "employees_id",
});
Patient.hasMany(Diagnose, {
  foreignKey: "patients_id",
  onDelete: "CASCADE",
});
Diagnose.belongsTo(Patient, {
  foreignKey: "employees_id",
});

// linking appointments  to diagnoses
Diagnose.belongsTo(Appointments, {
  foreignKey: "appointments_id",
});

module.exports = {
  Employee,
  Patient,
  Appointments,
  EmpSched,
  MedicalHistory,
  Diagnose,
};
