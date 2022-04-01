const { EmpSched } = require("../model");

const scheduleData = [
  {
    start_time: "000000",
    end_time: "080000",
  },
  {
    start_time: "080000",
    end_time: "160000",
  },
  {
    start_time: "160000",
    end_time: "000000",
  },
];

const seedSchedule = () => EmpSched.bulkCreate(scheduleData);

module.exports = seedSchedule;
