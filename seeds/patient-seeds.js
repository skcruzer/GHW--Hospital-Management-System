const { Patient } = require("../model");

const patientsData = [
  {
    first_name: "Helen",
    last_name: "Kim",
    sex: "female",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "helen@gmail.com",
    address: "23 Oak Dr., La Habra, CA",
    primary_care_physician: "Dr. Sims",
    pcp_contact: "123456970",
    insurance: "Anthem Blue Cross",
    medical_history: "1",
    appointments: "1",
  },
  {
    first_name: "Hi",
    last_name: "Bob",
    sex: "male",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "bob@gmail.com",
    address: "23 Oak Dr., La Habra, CA",
    primary_care_physician: "Dr. Sims",
    pcp_contact: "123456970",
    insurance: "Anthem Blue Cross",
    medical_history: "2",
    appointments: "2",
  },
  {
    first_name: "Best",
    last_name: "Buy",
    sex: "male",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "bestbuy@gmail.com",
    address: "23 Oak Dr., La Habra, CA",
    primary_care_physician: "Dr. Sims",
    pcp_contact: "123456970",
    insurance: "Anthem Blue Cross",
    medical_history: "3",
    appointments: "3",
  },
  {
    first_name: "Hello",
    last_name: "Kitty",
    sex: "female",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "hellokitty@gmail.com",
    address: "23 Oak Dr., La Habra, CA",
    primary_care_physician: "Dr. Sims",
    pcp_contact: "123456970",
    insurance: "Anthem Blue Cross",
    medical_history: "4",
    appointments: "4",
  },
];

const seedPatients = () => Patient.bulkCreate(patientsData);

module.exports = seedPatients;
