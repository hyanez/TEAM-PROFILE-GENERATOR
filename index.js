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
      </div>`;

  fs.writeFile("./dist/generatedHTML.html", openingHTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("The beginning of your file has been generated!");
}

function addEmployee(employee) {
  return new Promise(function (resolve, reject) {});
}

//Function that appends closing tags using template literals to the end of the html file
function addClosingTags() {
  const closingTags = `</body>
    </html>`;
  fs.appendFile("./dis/generatedHTML.html", closingTags, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Closing tags for the HTML tags have been generated");
}
// INITIALIZATION
