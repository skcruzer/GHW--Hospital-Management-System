const { Employee } = require("../model");

const employeesData = [
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Kien Hoang",
    sex: "male",
    title: "doctor",
    dob: new Date("11/27/2011"),
    mobile: "123456789",
    email: "test@gmail.com",
    password: "testing123",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Sean Cruz",
    sex: "male",
    title: "doctor",
    dob: new Date("11/27/2011"),
    mobile: "123456789",
    email: "test1@gmail.com",
    password: "testing123",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Hye Won Park ",
    sex: "male",
    title: "doctor",
    dob: new Date("11/27/2011"),
    mobile: "123456789",
    email: "test2@gmail.com",
    password: "testing123",
    salary: 100000,
  },
  {
    email: "hello@gmail.com",
    password: "dlkajdf",
    name: "Brendan Sandfer",
    sex: "male",
    title: "doctor",
    dob: new Date("11/27/2011"),
    mobile: "123456789",
    email: "test3@gmail.com",
    password: "testing123",
    salary: 100000,
  },
];

const seedEmployees = () => Employee.bulkCreate(employeesData);

module.exports = seedEmployees;
