// DESCRIPTION: node packages used within application.
const inquirer = require('inquirer');
const fs = require ("fs");

const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

const team = [];

function firstQuestion(){
    inquirer
        .prompt ([
            {name: "managerName",
            type: "input",
            message: "What is the Team Manager's name?",
            validate: function (userInput) {
                        if (typeof userInput === "string"){
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: "managerID",
            type: "number",
            message: "What is the Team Manager's ID?",
            validate: function (userInput) {
                        if (typeof userInput === number){
                            return true
                        }else{
                            return ("Please enter a valid ID number");
                        };
            }},

            {name: "managerEmail",
            type: "input",
            message: "What is the Team Manager's email address?",
            validate: function (userInput) {
                        const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
                    },
            },

            {name: "managerOffice",
            type: "number",
            message: "What is the Team Manager's office number?",
            validate: function (userInput) {
                        if (typeof userInput === number){
                            return true
                        }else{
                            return ("Please enter a valid office number");
                        };
            }},
        ])
        .then ((data) => {
            const manager = new Manager(
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.managerOffice,
            );
            console.log(manager);
            team.push(manager);
            addTeamMember();
            console.log(team);
        });
}

function addTeamMember(){
    inquirer
        .prompt([
            {name: "role",
            type: "list",
            message: "Which type of Team Member would you like to add?",
            choices: [
                'Engingeer',
                'Intern',
                "I don't want to add a new team member",
            ],
            default: 'Engingeer',
            },
        ])
        .then((data) => {
            if (data.role === 'Engineer'){
                engineerQuestions();
            }else if (data.role === 'Intern'){
                internQuestions();
            } else {
                renderHTMLFile();
            };
        });
};

const employeeQuestions = [
    {name: `${role}Name`,
    type: "input",
    message: `What is the ${role}'s name?`,
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: `${role}ID`,
    type: "number",
    message: `What is the ${role}'s ID?`,
    validate: function (userInput) {
                if (typeof userInput === number){
                    return true
                }else{
                    return ("Please enter a valid ID number");
                };
    }},

    {name: `${role}Email`,
    type: "input",
    message: `What is the ${role}'s email address?`,
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    }
]

function engineerQuestions() {
    inquirer
        .prompt([
            {employeeQuestions},
            {name: "github",
            type: "input",
            message: "What is the Engineers's GitHub username?",
            when: (answers) => answers.addTeamMember === 'Intern',
            validate: function (value) {
                        return axios.get(`https://api.github.com/users/${value}`)
                            .then (data => {
                                return true;
                            })
                            .catch (err => {
                                return (`Please enter a valid GitHub username`);
                            });
            }},
        ])