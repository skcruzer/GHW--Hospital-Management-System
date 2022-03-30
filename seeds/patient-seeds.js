const { Patient } = require('../model')

const patientsData = [
  {
    first_name: "Helen"
    last_name: "Kim",
    sex: "female",
    dob: 20111127,
    mobile: "123456789",
    email: "helen@gmail.com",
    address: "23 Oak Dr., La Habra, CA"
    primary_care_physician: "Dr. Sims"
    pcp_contact: "123456970"
    insurance: "Anthem Blue Cross"
    medical_history: 
    appointments: 
  },
  
]

const seedPatients = () => Patient.bulkCreate(patientsData)

module.exports = seedPatients