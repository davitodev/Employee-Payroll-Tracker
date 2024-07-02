// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  var employeeList = [];
  var myConfirmation = true;
  while(myConfirmation){
    var firstName = prompt("What is your first name?");
    var lastName = prompt("What is your last name?");
    var salary = prompt("What is your salary?"); 
    if (isNaN(salary)){
      salary = 0;
    } else {
      salary = parseInt(salary);
    }
    var employee = {
      firstName:firstName,
      lastName:lastName,
      salary:salary,
    }
    employeeList.push(employee);
    myConfirmation = confirm("Do you want to add another employee?");
  }
  return employeeList;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  var sum = 0;
  for(i = 0; i < employeesArray.length; i++){
    sum = sum + employeesArray[i].salary
  }
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${sum / employeesArray.length}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  var randomNumber = Math.random() * employeesArray.length; 
  var randomWholeNumber = Math.floor(randomNumber)
  var randomEmployee = employeesArray[randomWholeNumber]
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`); 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
