const router = require('express').Router()
const { Employee, EmpSched } = require('../model')

//GET all employees with their employee schedule
router.get('/employees', async (req, res) => {
  try {
    let employees = await Employee.findAll({ include: [{ model: EmpSched }] });
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ message: 'Woops! Something went wrong.' })
  }
})

// //GET a SINGLE employee with their schedule by ID
router.get('/employees/:id', async ({body, params:{id}}, res) => {
  try {
    const employee = await Employee.findOne({
      where: {id},
      include: [{model: EmpSched}]
    });
    
    if (!employee) {
      res.status(404).json({ message: 'No employee found with this id!' });
      return;
    }
    
    res.json(employee);

  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE an employee
router.post('/employees', async ({ body }, res) => {
  try {
    const employee = await Employee.create(body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ message: 'Woops! Something went wrong.' })
  }
})

//DELETE an employee


module.exports = router
