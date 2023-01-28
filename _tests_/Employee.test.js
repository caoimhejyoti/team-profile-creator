const { default: test } = require("node:test")
const { describe } = require("yargs")
const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
            const employee = new Employee("Sarah", 01, "test@test.com");

            expect (employee.name).to.equal("Sarah");
            expect (employee.id).to.equal(01);
            expect (employee.email).to.equal("test@test.com");
        });

        it ("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it ("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Sarah");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            
            expect(cb).toThrow(err);
        });

        it ("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(0, 01);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            
            expect(cb).toThrow(err);
        });
        
        it ("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Sarah", "01");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            
            expect(cb).toThrow(err);
        });
        
        it ("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Sarah", 01, "test@test.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            
            expect(cb).toThrow(err);
        });

    });
});