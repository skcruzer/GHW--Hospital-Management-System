const seedEmployees = require("./employee-seeds");
const seedPatients = require("./patient-seeds");
const seedAppointments = require("./appointments-seed");
const seedMedHistory = require("./medicalhistory-seed");
const seedSchedule = require("./empSched-seeds");
const seedDiagnose = require("./diagnoses-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedEmployees();
  console.log("\n----- EMPLOYEE SEEDED -----\n");
  await seedPatients();
  console.log("\n----- PATIENT SEEDED -----\n");
  await seedAppointments();
  console.log("\n----- APPOINTMENTS SEEDED -----\n");
  await seedMedHistory();
  console.log("\n----- MEDICAL HISTORY SEEDED -----\n");
  await seedSchedule();
  console.log("\n----- SCHEDULE SEEDED -----\n");
  await seedDiagnose();
  console.log("\n----- DIAGNOSE SEEDED -----\n");

  process.exit(0);
};

seedAll();
