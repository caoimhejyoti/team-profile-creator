// TODO: 
    // remove all highlighted comments

// DESCRIPTION: node packages used within application.
const fs = require ("fs");
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//WORKING! DESCRIPTION: Function generates manager card.
function generateManagerCard(manager) {
    return `
            <section id ="manager-card" class="card team-card">
                <section class="manager-stripe bg-gradient"></section>
                <section class="profile-thumb-block">
                    <img src="/public/img/manager.png" alt="manager-icon" class="profile"/>
                </section>
                <section class="card-content">
                <h2>${manager.name}<small>Manager</small></h2>
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.office}</p>
                </section>
            </section> 
    `
};

generateTeamHTML = (team) =>{
    const teamArray = [];
    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === "Manager"){
            const managerCard = generateManagerCards(employee);

            teamArray.push(managerCard);
        }

        if (role === "Engineer"){
            const engineerCard = generateEngineerCards(employee);

            teamArray.push(engineerCard);
        }

        if (role === "Intern"){
            const internCard = generateInternCards(employee);

            teamArray.push(internCard);
        }
    }

    const employeeCards = teamArray.join('')
    console.log(employeeCards);
    const generateTeam = generateHTML(employeeCards);
    return generateTeam;
}




//DESCRIPTION: Function generates manager card(s).
const generateManagerCards = function (manager) {
    return `
            <section id ="manager-card" class="card team-card">
                <section class="manager-stripe bg-gradient"></section>
                <section class="profile-thumb-block">
                    <img src="/public/img/manager.png" alt="manager.png-icon" class="profile"/>
                </section>
                <section class="card-content">
                    <h2>${manager.name}<small>Manager</small></h2>
                    <p>ID: ${manager.id}</p>
                    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office Number: ${manager.office}</p>
                </section>
            </section>
    `
};

//FIXME: make loop to produce multiple cards if needed. DESCRIPTION: Function generates engineer card(s).
const generateEngineerCards = function (engineer) {
    return `
            <section id ="engineer-card" class="card team-card">
                <section class="engineer-stripe bg-gradient"></section>
                <section class="profile-thumb-block">
                    <img src="/public/img/engineer.png" alt="engineer.png-icon" class="profile"/>
                </section>
                <section class="card-content">
                    <h2>${engineer.name}<small>Engineer</small></h2>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>GitHub: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></p>
                </section>
            </section>
    `
};

//FIXME: make loop to produce multiple cards if needed. DESCRIPTION: Function generates intern  card(s).
function generateInternCards(intern) {
    return `
            <section id ="intern-card" class="card team-card">
                <section class="intern-stripe"></section>
                <section class="profile-thumb-block">
                    <img src="/public/img/intern.png" alt="intern-icon" class="profile"/>
                </section>
                <section class="card-content">
                    <h2>${intern.name}<small>Intern</small></h2>
                    <p>ID: ${intern.id}</p>
                    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p>School: ${intern.school}</p>
                </section>
            </section> 
    `
};

// FIXME: bug in github link in footer. DESCRIPTION: Function to generate html file with user information
const generateHTML = function (employeeCards) {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- style sheets -->
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <!-- developer stylesheet -->
        <link rel="stylesheet" href="/public/style.css">
    </head>
    <body>
        <header class="text-center p-4 bg-success bg-gradient text-white">
            <h1 class="fw-bold">My Team</h1>
        </header>

        <main>
            <section id = "team-cards" class = "col ">   
          
            ${employeeCards}
           
            </section>           
        </main>

        <footer id="footer" class="p-3 text-center bg-success bg-gradient text-emphasis-secondary fixed-bottom">
            <!-- add GitHub link -->
            <h5>Webpage created by CLI application.</h5>
            <p> Designed by <a href="https://github.com/caoimhejyoti" target="blank"> CaoimheJyoti</p>
        </footer>
    </body>
    `
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateHTML;


{/* <section id ="engineer-card" class="card team-card">
<section class="engineer-stripe bg-gradient"></section>
<section class="profile-thumb-block">
    <img src="/public/img/engineer.png" alt="engineer.png-icon" class="profile"/>
</section>
<section class="card-content">
    <h2>${generateEngineer[0].name}<small>Engineer</small></h2>
    <p>ID: ${generateEngineer[0].id}</p>
    <p>Email: ${generateEngineer[0].email}</p>
    <p>GitHub: ${generateEngineer[0].github}</p>
</section>
</section>  */}

// ----------------------------------------------------------------


  // ${generateManagerCard(team[0])}