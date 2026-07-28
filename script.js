let employees = []
let nextEmployeeId = 1

function addEmployee(name, email, department, position, salary)
{
    let employee = {
        id : nextEmployeeId,
        name : name,
        email : email,
        department : department,
        position : position,
        salary : salary
    };

    employees.push(employee)
    nextEmployeeId++;

    displayEmployees();
}

function displayEmployees()
{
    let tableBody = document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";

    employees.forEach(function(employee)
    {
        let row = document.createElement("tr")

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>${employee.position}</td>
            <td>${employee.salary}</td>
            <td><button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button></td>
        `

        tableBody.appendChild(row)
    })
}

function deleteEmployee(employeeId) 
{

    employees = employees.filter(function(employee) {
        return employee.id !== employeeId;
    });
    
    displayEmployees();
}

let form = document.querySelector(".form form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let position = document.getElementById("position").value;
    let salary = document.getElementById("salary").value;

    addEmployee(name, email, department, position, salary);

    form.reset();
});

function searchEmployees()
{
    let searchInput = document.getElementById("searchInput").value.toLowerCase()

    let departmentFilter = document.getElementById("departmentFilter").value

    let filteredEmployees = employees.filter(function(employee)
    {
        let nameMatches = employee.name.toLowerCase().includes(searchInput)

        let departmentMatches = (departmentFilter === "") || (employee.department === departmentFilter)

        return nameMatches && departmentMatches;
    })

    displayFilteredEmployees(filteredEmployees);
}

function displayFilteredEmployees(employeesToDisplay) {

    let tableBody = document.getElementById("employeeTableBody");
  
    tableBody.innerHTML = "";
  
    if (employeesToDisplay.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='7' style='text-align:center; padding:20px;'>No employees found</td></tr>";
        return;
    }

    employeesToDisplay.forEach(function(employee) {
     
        let row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>${employee.position}</td>
            <td>${employee.salary}</td>
            <td><button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button></td>
        `;
       
        tableBody.appendChild(row);
    });
}

let searchInput = document.getElementById("searchInput");
let departmentFilter = document.getElementById("departmentFilter");


searchInput.addEventListener("input", function() {
    searchEmployees();
});

departmentFilter.addEventListener("change", function() {
    searchEmployees();
});