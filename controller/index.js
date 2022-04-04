const router = require("express").Router();

router.use("/api", require("./employee"));
router.use("/api", require("./diagnose"));
router.use("/api", require("./patient.js"));
router.use("/api", require("./login.js"));
router.use("/api", require("./appointments.js"));

module.exports = router;
