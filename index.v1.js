// DESCRIPTION: node packages used within application.
const inquirer = require('inquirer');
const fs = require ("fs");
var stringValidate = require ("string-validate");
//FIXME: where did this come from?
const { number } = require("yargs");

const generateHTML = require("./generate-html");

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

    {name: "employeeName",
    type: "input",
    message: "What is the Employee's name?",
    when: (answers) => answers.addTeamMember === 'Engingeer' && answers.addTeamMember === 'Intern',
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "employeeID",
    type: "number",
    message: "What is the Employee's ID?",
    when: (answers) => answers.addTeamMember === 'Engingeer' && answers.addTeamMember === 'Intern',
    validate: function (userInput) {
                if (typeof userInput === number){
                    return true
                }else{
                    return ("Please enter a valid ID number");
                };
    }},

    {name: "employeeEmail",
    type: "input",
    message: "What is the Employee's email address?",
    when: (answers) => answers.addTeamMember === 'Engingeer' && answers.addTeamMember === 'Intern',
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    },
    // {name: "internName",
    // type: "input",
    // message: "What is the Intern's name?",
    // validate: function (userInput) {
    //             if (typeof userInput === "string"){
    //                 return true
    //             }else{
    //                 return ("Please enter a valid name");
    //             };
    // }},

    // {name: "internID",
    // type: "number",
    // message: "What is the Intern's ID?",
    // validate: function (userInput) {
    //             if (typeof userInput === number){
    //                 return true
    //             }else{
    //                 return ("Please enter a valid ID number");
    //             };
    // }},

    // {name: "internEmail",
    // type: "input",
    // message: "What is the Intern's email address?",
    // validate: function (userInput) {
    //             const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //             if (symbols.test(String(userInput).toLowerCase())) {
    //                 return true
    //             } else {
    //                 return ('Please enter a valid email!');
    //             };
    //         },
    // },

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
    ,
    {name: "internSchool",
    type: "input",
    message: "What is the Intern's school",
    when: (answers) => answers.addTeamMember === 'Intern',
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
