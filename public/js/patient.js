//GET PATIENTS
const getPatients = async function () {
  const res = await fetch('/api/patients');
  return res.json();
}

const addPatient = async function (patient) {
  const res = await fetch('api/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(patient)
  })
  return res.json();
}

const createPatient = ({ id, first_name, last_name, sex, dob, mobile, email, address, primary_care_physician, pcp_contact, insurance, appointments, medicalhistories }) => {
  const rowPatient = document.createElement('tr');
  const colId = document.createElement('th');
  const colFirst = document.createElement('th');
  const colLast = document.createElement('th');
  const colSex = document.createElement('th');
  const colDob = document.createElement('th');
  const colMobile = document.createElement('th');
  const colEmail = document.createElement('th');
  const colAddress = document.createElement('th');
  const colPcp = document.createElement('th');
  const colInsurance = document.createElement('th');


  colId.innerHTML = `${id}`
  rowPatient.classList.add(id);
  colFirst.innerHTML = `${first_name}`
  colLast.innerHTML = `${last_name}`
  colSex.innerHTML = `${sex}`
  colDob.innerHTML = `${dob}`
  colMobile.innerHTML = `${mobile}`
  colEmail.innerHTML = `${email}`
  colAddress.innerHTML = `${address}`
  colPcp.innerHTML = `${primary_care_physician} (phone:${pcp_contact})`
  colInsurance.innerHTML = `${insurance}`

            
            
  rowPatient.append(colId, colFirst, colLast, colSex, colDob, colMobile, colEmail, colAddress, colPcp, colInsurance) ;
  return rowPatient;
}


getPatients()
  .then(patients => {
    patients.forEach(patient =>
      document.getElementById('tablebody').append(createPatient(patient)))
  })
  .catch(err => console.error(err));




//ADD patients by pressing button
document.getElementById('addPatient').addEventListener('click', event => {
  event.preventDefault();

  addPatient({
    first_name: document.getElementById('formFname').value,
    last_name: document.getElementById('formLname').value,
    sex: document.getElementById('formSex').value,
    dob: document.getElementById('formDob').value,
    //doesnt seem to work from here :/
    mobile: document.getElementById('formMobile').value,
    email: document.getElementById('formEmail').value,
    address: document.getElementById('formAddress').value,
    primary_care_physician: document.getElementById('formPcp').value,
    pcp_contact: document.getElementById('formPcpContact').value,
    insurance: document.getElementById('formInsurance').value
  })
    .then(patient => {
      //need to add to database
      document.getElementById('tablebody').append(createPatient(patient))
    })
    .catch(err => console.error(err))
})

//DELETE patient
const deletePatient = async function (id) {
  await fetch(`/api/patients/${id}`, {
    method: 'DELETE'
  })
  return true;
}

document.getElementById('deletePatient').addEventListener('click', event => {
  event.preventDefault();

  deletePatient(document.getElementById('formdeleId').value)
  .then(id=> {
    let table = document.getElementById('tablebody');
    for (let i=0; i<table.length; i++) {
      if (table[i].getElementsByClassName==id) {
        table.deleteRow(i);
      }
    }
    //you need to refresh to see whether patient is deleted
  })
  .catch(err=>console.error(err))
})
