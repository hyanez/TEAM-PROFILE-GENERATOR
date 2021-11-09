const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  it("Should initialize school name with passed argument from constructor", () => {
    const schoolName = "Fordham";
    const intern = new Intern("Hugo", 10, "sample@gmail.com", schoolName);
    expect(intern.schoolName).toBe(schoolName);
  });
  describe("getSchool", () => {
    it("Should return the school name of the employee as a string", () => {
      const schoolName = "Fordham";
      const intern = new Intern("Hugo", 10, "sample@gmail.com", schoolName);
      expect(intern.getGithub()).toBe(schoolName);
    });
  });
  describe("getRole", () => {
    it("Should return the role of the employee as a string", () => {
      const position = "Intern";
      const intern = new Intern("Hugo", 10, "sample@gmail.com", "103B");
      expect(intern.getRole()).toBe(position);
    });
  });
});
