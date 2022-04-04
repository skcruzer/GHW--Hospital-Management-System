fetch('/api/appointments').then(function(res) {
  // console.log(res.json())
  return res.json()
})
.then(function(data) {
  console.log(data)
})
// get appointments
const getAppointments = async function () {
  const res = await fetch('/api/appointments')
  return res.json()
}

const addAppointment = async function (appointment) {
  const res = await fetch('/api/appointments', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointment)
  })
}

const createAppointment = ({ id, date, start_time, end_time, complaint, patients_id, employees_id, diagnoses }) => {
  const rowAppointment = document.createElement('tr')
  const colApptId = document.createElement('th')
  const colApptDate = document.createElement('th')
  const colApptStart = document.createElement('th')
  const colApptEnd = document.createElement('th')
  const colApptComp = document.createElement('th')
  const colApptPat = document.createElement('th')
  const colApptDoc = document.createElement('th')
  const colDiagnosis = document.createElement('th')

  if(!diagnoses) {
    console.log('no diagnosis at this time.')

  } else {
    diagnoses.forEach(patDiag => {

    const diagBody = document.createElement('div')
    colDiagnosis.innerHTML = `<p>Diagnosis: ${patDiag.diagnosis}</p>
    <li>Exams: ${patDiag.exams}</li>
    <li>Treatment: ${patDiag.treatment}</li>
    <li>Prescriptions: ${patDiag.prescribed_meds}</li>
    <br>`
      colDiagnosis.append(diagBody)
    })
  }
  
  colApptId.innerHTML = `${id}`
  rowAppointment.classList.add(id)
  colApptDate.innerHTML = `${date}`
  colApptStart.innerHTML = `${start_time}`
  colApptEnd.innerHTML = `${end_time}`
  colApptComp.innerHTML = `${complaint}`
  colApptPat.innerHTML = `${patients_id}`
  colApptDoc.innerHTML = `${employees_id}`

  rowAppointment.append(colApptId, colApptDate, colApptStart, colApptEnd, colApptComp, colApptPat, colApptDoc, colDiagnosis)

  return rowAppointment
}

getAppointments()
  .then(appointments => {
    appointments.forEach(appointment =>
      document.getElementById('tableBody').append(createAppointment(appointment)))
  })
  .catch(err => console.error(err))

// add new appointments
document.getElementById('addAppointment').addEventListener('click', event => {

  addAppointment({
    date: document.getElementById('formDate').value,
    start_time: document.getElementById('formStart').value,
    end_time: document.getElementById('formEnd').value,
    complaint: document.getElementById('formComp').value,
    patients_id: document.getElementById('formPat').value,
    employees_id: document.getElementById('formDoc').value,
  })
  .then(appointment => {
    // add appointment to database
    document.getElementById('tableBody').append(createAppointment(appointment))
  })
  .catch(err => console.error(err))
})

//delete an appointment by id
const deleteAppointment = async function (id) {
  await fetch(`/api/appointments/${id}`, {
    method: 'DELETE'
  })
  return true;
}

document.getElementById('deleteAppointment').addEventListener('click', event => {

  deleteAppointment(document.getElementById('formDelAppt').value)
    .then(id => {
      let table = document.getElementById('tableBody');
      for (let i = 0; i < table.length; i++) {
        if (table[i].getElementsByClassName == id) {
          table.deleteRow(i);
        }
      }
    })
    .catch(err => console.error(err))
})