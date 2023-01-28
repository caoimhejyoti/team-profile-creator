// DESCRIPTION: node packages used within application.
const inquirer = require('inquirer');
const fs = require ("fs");
var stringValidate = require ("string-validate");
//FIXME: where did this come from?
const { number } = require("yargs");

// DESCRIPTION: Array of questions for user input
const questions = [
    {name: "teamName",
    type: "input",
    message: "What is the Team name?",
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "managerName",
    type: "input",
    message: "What is the Team Manager's name?",
    // validate: function (userInput) {
    //             if (typeof userInput === "string"){
    //                 return true
    //             }else{
    //                 return ("Please enter a valid name");
    //             };
    default: 'My Team',
    },

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

    {name: "addTeamMember",
    type: "list",
    message: "Which type of Team Member would you like to add?",
    choices: [
        'Engingeer',
        'Intern',
        "I don't want to add a new team member",
    ],
    default: 'Engingeer',
    },

    {name: "engineerName",
    type: "input",
    message: "What is the Engineer's name?",
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "engineerID",
    type: "number",
    message: "What is the Engineer's ID?",
    validate: function (userInput) {
                if (typeof userInput === number){
                    return true
                }else{
                    return ("Please enter a valid ID number");
                };
    }},

    {name: "engineerEmail",
    type: "input",
    message: "What is the Engineer's email address?",
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    },
    {name: "internName",
    type: "input",
    message: "What is the Intern's name?",
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "internID",
    type: "number",
    message: "What is the Intern's ID?",
    validate: function (userInput) {
                if (typeof userInput === number){
                    return true
                }else{
                    return ("Please enter a valid ID number");
                };
    }},

    {name: "internEmail",
    type: "input",
    message: "What is the Intern's email address?",
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    },

    {name: "internSchool",
    type: "input",
    message: "What is the Intern's school",
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid school name");
                };
    }},

];

//DESCRIPTION: links to generateHTML.js file for exported packages.
const generateHTML = require(`./src/generateHTML`);

// DESCRIPTION: function to write HTML file
function writeToFileFnc() {
    inquirer
        .prompt (questions)
            .then ((data) => {
                fs.writeFile(`${name}.html`, generateHTML(data), (err) =>
                err ? console.error(err) : console.log('Team webpage created!'))
            });
};

//DESCRIPTION: Function to initialize app
function initFnc() {
    writeToFileFnc();
}

//DESCRIPTION: Function call to initialize app
initFnc();
