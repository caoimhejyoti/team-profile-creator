const Employee = require("../lib/Employee.js")
const Manager = require("../lib/Manager.js")

test("should create a new manager class", () => {
    const manager = new Manager("Sarah", 1, "test@test.com", 11);
    expect (manager.name).toBe("Sarah");
    expect (manager.id).toBe(1);
    expect (manager.email).toBe("test@test.com");
    expect (manager.office).toBe(11);
});

test("should get name via getOffice", () => {
    const office = new Manager("Sarah", 1, "test@test.com", 11);
    expect (office.getOffice()).toBe(11);
});

test("should get name via getRole", () => {
    const role = new Manager("Sarah", 1, "test@test.com", 11 );
    expect (role.getRole()).toBe("Manager");
});
