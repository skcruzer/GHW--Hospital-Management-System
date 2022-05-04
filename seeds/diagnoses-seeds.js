const { Diagnose } = require("../model");

const diagnoseData = [
  {
    diagnosis: "Covid",
    exams: "Covid-test",
    treatment: "Drink a lot of water and stay at home!",
    prescribed_meds: "Tylenol",
    employees_id: "4",
    patients_id: "1",
    appointments_id: "1",
  },
  {
    diagnosis: "High Blood Pressure",
    exams: "Blood-test",
    treatment: "Avoid salty foods",
    prescribed_meds: "See your doctor and ask questions",
    employees_id: "3",
    patients_id: "2",
    appointments_id: "2",
  },
  {
    diagnosis: "Noncardiac Chest Pain ",
    exams: "X-Ray",
    treatment: "If your chest pain gets different or worse, call your doctor",
    prescribed_meds: "See your doctor and ask questions",
    employees_id: "2",
    patients_id: "3",
    appointments_id: "3",
  },
  {
    diagnosis: "Laziness ",
    exams: "YOU",
    treatment: "CANT HELP IT",
    prescribed_meds: "One of the uncured diseases",
    employees_id: "1",
    patients_id: "4",
    appointments_id: "4",
  },
];

const seedDiagnose = () => Diagnose.bulkCreate(diagnoseData);

module.exports = seedDiagnose;
