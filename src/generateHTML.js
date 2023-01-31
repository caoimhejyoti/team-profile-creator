// TODO: 
    // remove all highlighted comments

//DESCRIPTION: Function generates manager card.
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

//FIXME: make loop to produce multiple cards if needed. DESCRIPTION: Function generates engineer card(s).
function generateEngineerCards(engineer) {
    return `
    <section id ="engineer-card" class="card team-card">
        <section class="engineer-stripe bg-gradient"></section>
        <section class="profile-thumb-block">
            <img src="/public/img/engineer.png" alt="engineer.png-icon" class="profile"/>
        </section>
        <section class="card-content">
            <h2>${engineer.engineerName}<small>Engineer</small></h2>
            <p>ID: ${engineer.engineerID}</p>
            <p>Email: ${engineer.engineerEmail}</p>
            <p>GitHub: ${engineer.github}</p>
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
            <h2>${intern.internName}<small>Intern</small></h2>
            <p>ID: ${intern.internID}</p>
            <p>Email: ${intern.internEmail}</p>
            <p>School: ${intern.internSchool}</p>
        </section>
    </section> 
    `
};

// DESCRIPTION: Function to generate html file with user information
function generateHTML(team) {
    console.log(team);
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

            ${generateManagerCard(team.manager)}
            

            </section>           
        </main>

        <footer id="footer" class="p-3 text-center bg-success bg-gradient text-emphasis-secondary fixed-bottom">
            <!-- add GitHub link -->
            <h5>Webpage created by CLI application.</h5>
            <p> Designed by CaoimheJyoti</p>
        </footer>
    </body>
    `
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateHTML;
