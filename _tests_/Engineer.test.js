const Employee = require("../lib/Employee.js")
const Engineer = require("../lib/Engineer.js")

test("should create a new engineer class", () => {
    const engineer = new Engineer("Sarah", 1, "test@test.com", "caoimhejyoti");
    expect (engineer.name).toBe("Sarah");
    expect (engineer.id).toBe(1);
    expect (engineer.email).toBe("test@test.com");
    expect (engineer.github).toBe("caoimhejyoti");
});

test("should get name via getGithub", () => {
    const github = new Engineer("Sarah", 1, "test@test.com", "caoimhejyoti");
    expect (github.getGithub()).toBe("caoimhejyoti");
});

test("should get name via getRole", () => {
    const role = new Engineer("Sarah", 1, "test@test.com", "caoimhejyoti");
    expect (role.getRole()).toBe("Engineer");
});

