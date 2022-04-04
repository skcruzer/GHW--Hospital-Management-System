const getPatients = async function () {
  const res = await fetch('/api/patients');
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



//id, first_name, last_name, sex, dob, mobile, email, address, primary_care_physician, pcp_contact, insurance, appointments, medicalhistories