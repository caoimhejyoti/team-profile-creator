const Employee = require('./Employee.js');

class Engingeer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub() { 
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
    
};

module.exports = Engineer;