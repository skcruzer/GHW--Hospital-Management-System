const router = require('express').Router()
const { Employee } = require('../model')

router.post('/employees', async ({ body }, res) => {
  try {
    const employee = await Employee.create(body)
    res.status(200).json(employee)
  } catch (err) {
    res.status(400).json({ message: 'Woops! Something went wrong.' })
  }
})

module.exports = router
