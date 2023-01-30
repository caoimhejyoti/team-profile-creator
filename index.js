// DESCRIPTION: node packages used within application.
const inquirer = require("inquirer");
const fs = require ("fs");
const axios = require ("axios");

//DESCRIPTION: links to generateHTML.js file for exported packages.
const generateHTML = require(`./src/generateHTML`);

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const team = [];

// FIXME: validate number questions. DESCRIPTION: function with manager questions
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
            // validate: function (userInput) {
            //             if (typeof userInput === number){
            //                 return true
            //             }else{
            //                 return ("Please enter a valid ID number");
            //             };
            // }
            },

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
            // validate: function (userInput) {
            //             if (typeof userInput === number){
            //                 return true
            //             }else{
            //                 return ("Please enter a valid office number");
            //             };
            // }
            },
        ])
        .then ((data) => {
            const manager = new Manager(
                data.managerName,
                data.managerID,
                data.managerEmail,
                data.managerOffice,
            );
            // console.log(manager);
            team.push(manager);
            console.log(team);
            addTeamMember();
        });
}

// DESCRIPTION: function asking user if they want to add a team member
function addTeamMember(){
    inquirer
        .prompt([
            {name: "role",
            type: "list",
            message: "Which type of Team Member would you like to add?",
            choices: [
                'Engineer',
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

// FIXME: can this be used?
const employeeQuestions = [
    {name: `employeeName`,
    type: "input",
    message: `What is the Employee's name?`,
    validate: function (userInput) {
                if (typeof userInput === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: `employeeID`,
    type: "number",
    message: `What is the Employee's ID?`,
    // validate: function (userInput) {
    //             if (typeof userInput === number){
    //                 return true
    //             }else{
    //                 return ("Please enter a valid ID number");
    //             };
    // }
    },

    {name: `employeeEmail`,
    type: "input",
    message: `What is the Employee's email address?`,
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    }
];

// FIXME: validate number questions and github. DESCRIPTION: function with engineer questions
function engineerQuestions() {
    inquirer
        .prompt([
            {name: `engineerName`,
            type: "input",
            message: `What is the Engineer's name?`,
            validate: function (userInput) {
                        if (typeof userInput === "string"){
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: `engineerID`,
            type: "number",
            message: `What is the Engineer's ID?`,
            // validate: function (userInput) {
            //             if (typeof userInput === number){
            //                 return true
            //             }else{
            //                 return ("Please enter a valid ID number");
            //             };
            // }
            },

            {name: `engineerEmail`,
            type: "input",
            message: `What is the Engineer's email address?`,
            validate: function (userInput) {
                        const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
            }},
            
            {name: "github",
            type: "input",
            message: "What is the Engineers's GitHub username?",
            // FIXME: validate not working - results in undefined
            validate: function (value) {
                        return axios.get(`https://api.github.com/users/${value}`)
                            .then (value => {
                                return true;
                            })
                            .catch (err => {
                                return (`Please enter a valid GitHub username`);
                            });
            }},
        ])
        .then ((data) => {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.github,
            );
            // console.log(engineer);
            team.push(engineer);
            console.log(team);
            addTeamMember();
        });
};

// FIXME: validate number questions. DESCRIPTION: function with intern questions
function internQuestions() {
    inquirer
        .prompt([
            {name: `internName`,
            type: "input",
            message: `What is the Intern's name?`,
            validate: function (userInput) {
                        if (typeof userInput === "string"){
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: `internID`,
            type: "number",
            message: `What is the Intern's ID?`,
            // validate: function (userInput) {
            //             if (typeof userInput === number){
            //                 return true
            //             }else{
            //                 return ("Please enter a valid ID number");
            //             };
            // }
            },

            {name: `internEmail`,
            type: "input",
            message: `What is the Intern's email address?`,
            validate: function (userInput) {
                        const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
            }},

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
        ])
        .then ((data) => {
            const intern = new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool,
            );
            // console.log(intern);
            team.push(intern);
            console.log(team);
            addTeamMember();
        });
};


// DESCRIPTION: function to write HTML file
function renderHTMLFile() {
    fs.writeFile(`test.html`, generateHTML(team), (err) =>
    err ? console.error(err) : console.log(team))
};

//DESCRIPTION: Function to initialize app
function initFnc() {
    firstQuestion();
}

//DESCRIPTION: Function call to initialize app
initFnc();