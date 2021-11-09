const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should initialize github username with passed argument from constructor", () => {
    const userName = "hyanez";
    const engineer = new Engineer("Hugo", 10, "sample@gmail.com", userName);
    expect(engineer.userName).toBe(userName);
  });
  describe("getGithub", () => {
    it("Should return the github username of the employee as a string", () => {
      const userName = "hyanez";
      const engineer = new Engineer("Hugo", 10, "sample@gmail.com", userName);
      expect(engineer.getGithub()).toBe(userName);
    });
  });
  describe("getRole", () => {
    it("Should return the role of the employee as a string", () => {
      const position = "Engineer";
      const engineer = new Engineer("Hugo", 10, "sample@gmail.com", "103B");
      expect(engineer.getRole()).toBe(position);
    });
  });
});
