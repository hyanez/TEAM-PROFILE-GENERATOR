const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, userName) {
    super(name, id, email);
    this.userName = userName;
  }
  getGithub() {
    return this.userName;
  }
  getRole() {
    const position = "Engineer";
    return position;
  }
}

module.exports = Engineer;
