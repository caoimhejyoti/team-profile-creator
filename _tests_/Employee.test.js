const Employee = require("../lib/Employee.js")

test("should create a new Employee class", () => {
    const employee = new Employee("Sarah", 1, "test@test.com");
    expect (employee.name).toBe("Sarah");
    expect (employee.id).toBe(1);
    expect (employee.email).toBe("test@test.com");
});

test("should get name via getName", () => {
    const name = new Employee("Sarah");
    expect (name.getName()).toBe("Sarah");
});

test("should get name via getId", () => {
    const id = new Employee("Sarah", 1, "test@test.com");
    expect (id.getId()).toBe(1);
});

test("should get name via getEmail", () => {
    const email = new Employee("Sarah", 1, "test@test.com");
    expect (email.getEmail()).toBe("test@test.com")
});


