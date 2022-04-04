const router = require('express').Router()
const { Appointments, Diagnose } = require('../model')

//get all appointments
router.get('/appointments', async (req, res) => {
  try {
    let appointments = await Appointments.findAll({ include: [{ model: Diagnose }] });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(400).json({ message: 'Woops! Something went wrong.' })
  }
})

// get one appointment
router.get('/appointments/:id', async ({ params: { id } }, res) => {
  try {
    let appointment = await Appointments.findOne()
    console.log(appointment)
    res.json(appointment)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong, please try again.' })
  }
})

// create an appointment
router.post('/appointments', async ({ body }, res) => {
  try {
    const appointment = await Appointments.create(body)
    res.status(200).json(appointment);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong, please try again.' });
  }
});

//delete an appointment
router.delete('/appointments/:id', async ({ body, params: { id } }, res) => {
  try {
    const appointment = await Appointments.destroy({
      where: { id }
    });

    if (!appointment) {
      res.status(404).json({ message: 'No appointment found with this id.' });
      return;
    }

    res.status(200).json({ message: 'Appointment has been deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//update an appointment 
router.put('/appointments/:id', async ({ body, params: { id } }, res) => {
  try {
    const appointment = await Appointments.update(body, { where: { id }, individualHooks: true });

    if (!appointment[0]) {
      res.status(404).json({ message: 'No appointment with this id.' });
      return;
    }

    res.status(200).json({ message: 'Appointment has been updated!' })

  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router