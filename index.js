// TODO: 
    // remove all highlighted comments

// DESCRIPTION: node packages used within application.
const inquirer = require("inquirer");
const fs = require ("fs");
const axios = require ("axios");

//COMPLETE! DESCRIPTION: links to JavaScript files for exported packages.
const generateHTML = require(`./src/generateHTML`);
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//DESCRIPTION: Global Variables
const team = [];

// COMPLETE! DESCRIPTION: function with manager questions
function firstQuestion(){
    inquirer
        .prompt ([
            {name: "managerName",
            type: "input",
            message: "What is the Team Manager's name?",
            validate: function (managerName) {
                        if (managerName =="" || managerName== null){
                            return ("Please enter a valid name");
                        }
                        else if (managerName && /^[a-zA-Z]+$/.test(managerName)) {
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: "managerID",
            type: "input",
            message: "What is the Team Manager's ID?",
            validate: managerID => {
                        if (managerID =="" || managerID== null){
                            return ("Please enter a valid ID number.");
                        }
                        else if (managerID && /^[0-9]+$/.test(managerID)){
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
                        if (userInput =="" || userInput== null){
                            return ("Please enter a valid email.");
                        }
                        else if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
            }},

            {name: "managerOffice",
            type: "input",
            message: "What is the Team Manager's office number?",
            validate: managerOffice => {
                        if (managerOffice =="" || managerOffice== null){
                            return ("Please enter a valid Office number.");
                        }
                        else if (managerOffice && /^[0-9]+$/.test(managerOffice)){
                            return true
                        }else{
                            return ("Please enter a valid Office number.");
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
            team.push(manager);
            // console.log(team); //used to debug
            addTeamMember();
        });
}

// COMPLETE! DESCRIPTION: function asking user if they want to add a team member
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

//COMPLETE! DESCRIPTION: function with engineer questions
function engineerQuestions() {
    inquirer
        .prompt([
            {name: `engineerName`,
            type: "input",
            message: `What is the Engineer's name?`,
            validate: function (engineerName) {
                        if (engineerName =="" || engineerName== null){
                            return ("Please enter a valid name");
                        }
                        else if (engineerName && /^[a-zA-Z]+$/.test(engineerName)){
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: `engineerID`,
            type: "input",
            message: `What is the Engineer's ID?`,
            validate: engineerID => {
                        if (engineerID =="" || engineerID== null){
                            return ("Please enter a valid ID number.");
                        }
                        else if (engineerID && /^[0-9]+$/.test(engineerID)){
                            return true
                        }else{
                            return ("Please enter a valid ID number.");
                        };
            }},

            {name: `engineerEmail`,
            type: "input",
            message: `What is the Engineer's email address?`,
            validate: function (userInput) {
                        const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (userInput =="" || userInput== null){
                            return ("Please enter a valid email.");
                        }
                        else if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
            }},
            
            {name: "github",
            type: "input",
            message: "What is the Engineers's GitHub username?",
            validate: function (value) {
                        if (value =="" || value== null){
                            return ("Please enter a valid Github username.");
                        }else{ 
                            return axios.get(`https://api.github.com/users/${value}`)
                                .then (value => {
                                    return true;
                                })
                                .catch (err => {
                                    return (`Please enter a valid GitHub username.`);
                                });
                        };
            }},
        ])
        .then ((data) => {
            const engineer = new Engineer(
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.github,
            );
            team.push(engineer);
            // console.log(team); //used to debug
            addTeamMember();
        });
};

// COMPLETE! DESCRIPTION: function with intern questions
function internQuestions() {
    inquirer
        .prompt([
            {name: `internName`,
            type: "input",
            message: `What is the Intern's name?`,
            validate: function (internName) {
                        if (internName =="" || internName== null){
                            return ("Please enter a valid name");
                        }
                        else if (internName && /^[a-zA-Z]+$/.test(internName)){
                            return true
                        }else{
                            return ("Please enter a valid name");
                        };
            }},

            {name: `internID`,
            type: "input",
            message: `What is the Intern's ID?`,
            validate: internID => {
                        if (internID =="" || internID== null){
                            return ("Please enter a valid ID number.");
                        }
                        else if (internID && /^[0-9]+$/.test(internID)){
                            return true
                        }else{
                            return ("Please enter a valid ID number.");
                        };
                    }
            },

            {name: `internEmail`,
            type: "input",
            message: `What is the Intern's email address?`,
            validate: function (userInput) {
                        const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (userInput =="" || userInput== null){
                            return ("Please enter a valid email.");
                        }
                        else if (symbols.test(String(userInput).toLowerCase())) {
                            return true
                        } else {
                            return ('Please enter a valid email!');
                        };
            }},

            {name: "internSchool",
            type: "input",
            message: "What is the Intern's school",
            validate: function (internSchool) {
                        if (internSchool =="" || internSchool== null){
                            return ("Please enter a valid School name");
                        }
                        else if (internSchool && /^[a-zA-Z]+$/.test(internSchool)){
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
            team.push(intern);
            // console.log(team); //used to debug
            addTeamMember();
        });
};


// FIXME: Change location saved. DESCRIPTION: function to write HTML file
function renderHTMLFile() {
    fs.writeFile(`./dist/Team.html`, generateTeamHTML(team), (err) =>
    err ? console.error(err) : console.log("Team HTML generated"));
};

//COMPLETE! DESCRIPTION: Function to initialize app
function initFnc() {
    firstQuestion();
}

//COMPLETE! DESCRIPTION: Function call to initialize app
initFnc();