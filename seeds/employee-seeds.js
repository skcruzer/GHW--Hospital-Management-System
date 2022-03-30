const { Employee } = require('../model')

const employeesData = [
  {
    name: "Kien Hoang",
    sex: "male",
    dob: 20111127,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Sean Cruz",
    sex: "male",
    dob: 20111127,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Hye Won Park ",
    sex: "male",
    dob: 20111127,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Brendan Sandfer",
    sex: "male",
    dob: 20111127,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  }
]

const seedEmployees = () => Employee.bulkCreate(employeesData)

module.exports = seedEmployees