// DEPENDENCES
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// GLOBAL VARIABLES
const employeeArray = [];

// FUNCTIONS
//Function that creates the opening HTML content, including the heading
function addOpeningHTML() {
  const openingHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <!-- Heading -->
      <div
        class="jumbotron jumbotron-fluid"
        style="
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: red;
          color: white;
        "
      >
        <div class="container">
          <h1 class="display-4" style="text-align: center">My Team</h1>
        </div>
      </div>
      <div
      class="main-container"
      style="display: flex; justify-content: space-evenly; align-items: center"
    >`;

  fs.writeFile("./dist/generatedHTML.html", openingHTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("The beginning of your file has been generated!");
}

function addEmployeeCard(employee) {
  return new Promise(function (resolve, reject) {
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();
    const role = employee.getRole();
    let info = "";
    if (role === "Engineer") {
      const username = employee.getGithub();
      info = `<!-- Engineer Card -->
      <div class="card" style="width: 18rem">
        <div class="card-body" style="background-color: blue; color: white">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub Username: ${username}</li>
        </ul>
      </div>`;
    } else if (role === "Manager") {
      const officeNumber = employee.getOfficeNumber();
      info = `<!-- Manager Card -->
      <div class="card" style="width: 18rem">
        <div class="card-body" style="background-color: blue; color: white">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
      </div>`;
    } else if (role === "Intern") {
      const school = employee.getSchool();
      info = `<!-- Intern Card -->
      <div class="card" style="width: 18rem">
        <div class="card-body" style="background-color: blue; color: white">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>`;
    }

    fs.appendFile("./dist/generatedHTML.html", info, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function askEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee's name: ",
        name: "employeeName",
      },
      {
        type: "input",
        message: "Enter employee's ID: ",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter employee's email: ",
        name: "employeeEmail",
      },
      {
        type: "list",
        message: "Select employee's position: ",
        choices: ["Manager", "Engineer", "Intern"],
        name: "employeeRole",
      },
    ])
    .then(function ({ employeeName, employeeID, employeeEmail, employeeRole }) {
      let moreInfo = "";

      if (employeeRole === "Engineer") {
        moreInfo = "Github Username";
      } else if (employeeRole === "Manager") {
        moreInfo = "Office Number";
      } else if (employeeRole === "Intern") {
        moreInfo = "School";
      }

      inquirer
        .prompt([
          {
            type: "input",
            message: `Enter your employee's ${moreInfo}: `,
            name: "employeeInfo",
          },
          {
            type: "list",
            message: "Want to add anymore employees?",
            choices: ["Yes", "No"],
            name: "anotherEmployee",
          },
        ])
        .then(function ({ employeeInfo, anotherEmployee }) {
          let newEmployee;
          if (moreInfo === "Github Username") {
            newEmployee = new Engineer(
              employeeName,
              employeeID,
              employeeEmail,
              employeeInfo
            );
          } else if (moreInfo === "Office Number") {
            newEmployee = new Manager(
              employeeName,
              employeeID,
              employeeEmail,
              employeeInfo
            );
          } else if (moreInfo === "School") {
            newEmployee = new Intern(
              employeeName,
              employeeID,
              employeeEmail,
              employeeInfo
            );
          }

          employeeArray.push(newEmployee);
          addEmployeeCard(newEmployee);

          if (anotherEmployee === "Yes") {
            askEmployeeInfo();
          } else if (anotherEmployee === "No") {
            addClosingTags();
          }
        });
    });
}

//Function that appends closing tags using template literals to the end of the html file
function addClosingTags() {
  const closingTags = `</div>
  </body>
    </html>`;
  fs.appendFile("./dist/generatedHTML.html", closingTags, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Closing tags for the HTML tags have been generated");
}
// INITIALIZATION
function init() {
  addOpeningHTML();
  askEmployeeInfo();
}

init();
