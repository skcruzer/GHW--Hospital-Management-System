const { MedicalHistory } = require("../model");

//for others: we gotta delete employee id because this is just referring to patient's past med history
const medhistoryData = [
  {
    year: 2021 - 11 - 27,
    condition: "CAD",
    surgeries: "cardiac bypass surgery",
    medication: "heart meds",
    patients_id: "1",
    employees_id: "1"
  },
  {
    year: 2022 - 11 - 27,
    condition: "breast cancer",
    surgeries: "lumpectomy",
    medication: "pain meds",
    patients_id: "2",
    employees_id: "2"
  },
  {
    year: 2018 - 11 - 27,
    condition: "abscess",
    surgeries: "abscess removal",
    medication: "pain meds",
    patients_id: "3",
    employees_id: "1"
  },
  {
    year: 2021 - 11 - 27,
    condition: "colon cancer",
    surgeries: "colostomy",
    medication: "pain meds",
    patients_id: "4",
    employees_id: "1"
  },

];

const seedMedHistory = () => MedicalHistory.bulkCreate(medhistoryData);

module.exports = seedMedHistory;
