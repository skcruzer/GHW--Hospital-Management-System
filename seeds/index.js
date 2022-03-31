const seedEmployees = require("./employee-seeds");
const seedSchedule = require("./empSched-seeds");
const seedDiagnose = require("./diagnoses-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedEmployees();
  console.log("\n----- EMPLOYEE SEEDED -----\n");
  await seedSchedule();
  console.log("\n----- SCHEDULE SEEDED -----\n");
  await seedDiagnose();
  console.log("\n----- DIAGNOSE SEEDED -----\n");

  process.exit(0);
};

seedAll();
