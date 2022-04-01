const { Appointments } = require("../model");

const appointmentsData = [
  {
    date: 2021 - 11 - 27,
    start_time: "13:00",
    end_time: "14:00",
    complaint: "heartache",
    employees_id: "1",
    patients_id: "1"
  },
  {
    date: 2022 - 10 - 27,
    start_time: "02:00",
    end_time: "03:00",
    complaint: "backache",
    employees_id: "2",
    patients_id: "2"
  },
  {
    date: 2022 - 09 - 27,
    start_time: "11:00",
    end_time: "12:00",
    complaint: "diarrhea",
    employees_id: "4",
    patients_id: "3"
  },
  {
    date: 2021 - 12 - 27,
    start_time: "13:00",
    end_time: "14:00",
    complaint: "diabetes",
    employees_id: "3",
    patients_id: "4"
  }
];

const seedAppointments = () => Appointments.bulkCreate(appointmentsData);

module.exports = seedAppointments;
