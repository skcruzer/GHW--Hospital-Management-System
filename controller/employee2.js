const router = require('express').Router()
const { Employee, EmpSched } = require('../model')

//get all employees with their employee schedule
router.get('/employees', async (req, res) => {
  try {
    let employees = await Employee.findAll({include:[{model: EmpSched}]});
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: 'Woops! Something went wrong.' })
  }
})

module.exports = router
