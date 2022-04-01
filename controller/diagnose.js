const router = require("express").Router();
const { Diagnose } = require("../model");

//get all
router.get("/diagnoses", async (req, res) => {
  try {
    const diagnoses = await Diagnose.findAll({});
    res.json(diagnoses);
  } catch {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
});

//get by
router.get("/diagnoses/:id", async ({ body, params: { id } }, res) => {
  try {
    const diagnose = await Diagnose.findOne({ where: { id } });
    res.json(diagnose);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
});

//update
router.put("/diagnoses/:id", async ({ body, params: { id } }, res) => {
  try {
    const diagnose = await Diagnose.findOne({ where: { id } });

    if (!diagnose) {
      res.status(404).json({ message: "No user with this id." });
      return;
    }

    await Diagnose.update({ ...body }, { where: { id } });

    res.status(200).json({ message: "Successfuly updated!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
});

module.exports = router;
