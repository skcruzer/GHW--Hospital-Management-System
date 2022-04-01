
const router = require("express").Router();

router.use("/api", require("./employee.js"));
router.use("/api", require("./diagnose"));

module.exports = router;

