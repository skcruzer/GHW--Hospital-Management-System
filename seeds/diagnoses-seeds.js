const { Diagnose } = require("../model");

const diagnoseData = [
  {
    diagnosis: "Covid",
    exams: "Covid-test",
    treatment: "Drink a lot of water and stay at home!",
    prescribed_meds: "Tylenol",
  },
  {
    diagnosis: "High Blood Pressure",
    exams: "Blood-test",
    treatment: "Avoid salty foods",
    prescribed_meds: "See your doctor and ask questions",
  },
  {
    diagnosis: "Noncardiac Chest Pain ",
    exams: "X-Ray",
    treatment: "If your chest pain gets different or worse, call your doctor",
    prescribed_meds: "See your doctor and ask questions",
  },
  {
    diagnosis: "Laziness ",
    exams: "YOU",
    treatment: "CANT HELP IT",
    prescribed_meds: "One of the uncured diseases",
  },
];

const seedDiagnose = () => Diagnose.bulkCreate(diagnoseData);

module.exports = seedDiagnose;
