const Employee = require("../lib/Employee.js")
const Intern = require("../lib/Intern.js")

test("should create a new intern class", () => {
    const engineer = new Intern("Sarah", 1, "test@test.com", "UWA");
    expect (engineer.name).toBe("Sarah");
    expect (engineer.id).toBe(1);
    expect (engineer.email).toBe("test@test.com");
    expect (engineer.school).toBe("UWA");
});

test("should get name via getSchool", () => {
    const github = new Intern("Sarah", 1, "test@test.com", "UWA");
    expect (github.getSchool()).toBe("UWA");
});

test("should get name via getRole", () => {
    const role = new Intern("Sarah", 1, "test@test.com", "UWA");
    expect (role.getRole()).toBe("Intern");
});
