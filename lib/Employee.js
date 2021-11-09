class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //Returns the object's name
  getName() {
    return this.name;
  }
  //Returns the object's id
  getId() {
    return this.id;
  }
  //Returns the object's email
  getEmail() {
    return this.email;
  }
  //Returns the objects role
  getRole() {
    const position = "Employee";
    return position;
  }
}

module.exports = Employee;
