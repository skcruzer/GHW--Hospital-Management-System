const seedEmployees = require("./employee-seeds");
const seedPatients = require("./patient-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedEmployees();
  console.log("\n----- EMPLOYEE SEEDED -----\n");
  await seedPatients();
  console.log("\n----- PATIENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
