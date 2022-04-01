const router = require("express").Router();
const { Diagnose } = require("../model");

router.get("/Diagnoses", async (req, res) => {
  try {
    const diagnoses = await Diagnose.findAll({});
    res.json(diagnoses);
  } catch {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again.", error: err });
  }
});

module.exports = router;
