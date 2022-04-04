const { EmpSched } = require("../model");

const scheduleData = [
  {
    date:  new Date("2021/04/05"),
    start_time: "000000",
    end_time: "080000",
    employees_id: "1",
  },
  {
    date:  new Date("2021/04/05"),
    start_time: "080000",
    end_time: "160000",
    employees_id: "2",
  },
  {
    date:  new Date("2021/04/05"),
    start_time: "160000",
    end_time: "000000",
    employees_id: "3",
  },
  {
    date:  new Date("2021/04/05"),
    start_time: "090000",
    end_time: "170000",
    employees_id: "4",
  },
];

const seedSchedule = () => EmpSched.bulkCreate(scheduleData);

module.exports = seedSchedule;
