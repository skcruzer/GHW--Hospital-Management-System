const router = require("express").Router();
const { Appointments } = require("../model");

router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointments.findAll({});
    res.json(appointments);
  } catch {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

module.exports = router;
