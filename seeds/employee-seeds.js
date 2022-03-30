const { Employee } = require('../model')

const employeesData = [
  {
    name: "Kien Hoang",
    sex: "male",
    dob: 20111127,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  }
]

const seedEmployees = () => Employee.bulkCreate(employeesData)

module.exports = seedEmployees