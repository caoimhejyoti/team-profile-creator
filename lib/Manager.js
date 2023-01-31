const inquirer = require("inquirer");
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, office){
        super(name, id, email);
        this.office = office;
    }

    getRole(){
        return 'Manager';
    }
    
};

module.exports = Manager;