// GET EMPLOYEE SCHEDULE 
const getEmployees = async function () {
  const res = await fetch('/api/employees');
  return res.json();
}

const addEmployee = async function (employee) {
  const res = await fetch('api/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
  })
  return res.json();
}

const createEmployee = ({ id, email, password, title, name, sex, dob, mobile, salary, empScheds }) => {
  const rowEmployee = document.createElement('tr');
  const colId = document.createElement('th');
  const colEmail = document.createElement('th');
  const colPassword = document.createElement('th');
  const colTitle = document.createElement('th');
  const colName = document.createElement('th');
  const colSex = document.createElement('th');
  const colDOB = document.createElement('th');
  const colMobile = document.createElement('th');
  const colSalary = document.createElement('th');
  const colSchedule = document.createElement('th');

  if (!empScheds) {
    console.log('no schedule for this patient')
  }
  else {
    empScheds.forEach(sched => {
      const schedBody = document.createElement('div');
      colSchedule.innerHTML = `<p>Date: ${sched.date}</p>
    <li>Start Time: ${sched.start_time}</li>
    <li>End Time: ${sched.end_time}</li>
   <br>`
      colSchedule.append(schedBody);
    })
  }


  colId.innerHTML = `${id}`
  rowEmployee.classList.add(id);
  colEmail.innerHTML = `${email}`
  colPassword.innerHTML = `${password}`
  colTitle.innerHTML = `${title}`
  colName.innerHTML = `${name}`
  colSex.innerHTML = `${sex}`
  colDOB.innerHTML = `${dob}`
  colMobile.innerHTML = `${mobile}`
  colSalary.innerHTML = `${salary}`

  rowEmployee.append(colId, colEmail, colPassword, colTitle, colName, colSex, colDOB, colMobile, colSalary, colSchedule);

  return rowEmployee;
}


getEmployees()
  .then(employees => {
    employees.forEach(employee =>
      document.getElementById('tablebody').append(createEmployee(employee)))
  })
  .catch(err => console.error(err));




//ADD employees by pressing button
document.getElementById('addEmployee').addEventListener('click', event => {

  addEmployee({
    email: document.getElementById('formEmail').value,
    password: document.getElementById('formPassword').value,
    title: document.getElementById('formTitle').value,
    name: document.getElementById('formName').value,
    sex: document.getElementById('formSex').value,
    dob: document.getElementById('formDOB').value,
    mobile: document.getElementById('formMobile').value,
    salary: document.getElementById('formSalary').value,
    // schedule: document.getElementById('formSchedule').value
  })
    .then(employee => {
      //need to add to database
      document.getElementById('tablebody').append(createEmployee(employee))
    })
    .catch(err => console.error(err))
})

//DELETE employee
const deleteEmployee = async function (id) {
  await fetch(`/api/employees/${id}`, {
    method: 'DELETE'
  })
  return true;
}

document.getElementById('deleteEmployee').addEventListener('click', event => {
  // event.preventDefault();

  deleteEmployee(document.getElementById('formdeleId').value)
    .then(id => {
      let table = document.getElementById('tablebody');
      for (let i = 0; i < table.length; i++) {
        if (table[i].getElementsByClassName == id) {
          table.deleteRow(i);
        }
      }

    })
    .catch(err => console.error(err))
})