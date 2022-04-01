const { Employee } = require("../model");

const employeesData = [
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Kien Hoang",
    sex: "male",
    title: "doctor",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Sean Cruz",
    sex: "male",
    title: "doctor",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Hye Won Park ",
    sex: "male",
    title: "doctor",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Brendan Sandfer",
    sex: "male",
    title: "doctor",
    dob: 2002 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000,
  },
];

const seedEmployees = () => Employee.bulkCreate(employeesData);

module.exports = seedEmployees;
