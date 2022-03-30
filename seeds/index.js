const seedEmployees = require("./employee-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')
  await seedEmployees()
  console.log('\n----- EMPLOYEE SEEDED -----\n')

  process.exit(0)
}

seedAll()