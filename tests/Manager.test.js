const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should initialize office number with passed argument from constructor", () => {
    const officeNumber = "103B";
    const manager = new Manager("Hugo", 10, "sample@gmail.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });
  describe("getRole", () => {
    it("Should return the role of the employee as a string", () => {
      const position = "Manager";
      const manager = new Manager(position);
      expect(manager.getRole()).toBe(position);
    });
  });
});
