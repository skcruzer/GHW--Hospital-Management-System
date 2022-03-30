const router = require('express').Router()

router.use('/api', require('./employee.js'))


module.exports = router