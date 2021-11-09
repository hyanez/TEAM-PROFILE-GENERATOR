const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should generate a new instance of Employee", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  describe("getName", () => {
    it("Should return a name string", () => {
      const name = "Hugo";
      const employee = new Employee(name);
      expect(employee.getName()).toBe(name);
    });
  });
  describe("getId", () => {
    it("Should return the ID number value", () => {
      const numId = 52;
      const employee = new Employee("Hugo", numId);
      expect(employee.getId()).toBe(numId);
    });
  });
  describe("getEmail", () => {
    it("Should return an email string", () => {
      const email = 52;
      const employee = new Employee("Hugo", 10, email);
      expect(employee.getEmail()).toBe(email);
    });
  });
  describe("getRole", () => {
    it("Should return a role string", () => {
      const position = "Employee";
      const employee = new Employee("Hugo", 10, "sample@gmail.com", position);
      expect(employee.getRole()).toBe(position);
    });
  });
});
