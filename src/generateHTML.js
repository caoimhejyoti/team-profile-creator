//DESCRIPTION: Function generate header html.
function renderHeaderFnc (name) {
    if (!name) {
      return "";
    }else{
      return `     
    <header class="header row">
        <h1 class="fw-bold">${teamName} Team</h1>
    </header>
    `
    }
}

//DESCRIPTION: Function generate manager card.
function renderHeaderFnc (managerName, managerID, managerEmail, managerOffice) {
    return `     
    <section class="card">
        <h1 class="fw-bold">${name} Team</h1>
    </section>
    `
}

function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>
        FIXME: create style sheets!

    </head>
    <body>
        ${renderHeaderFnc}

        <main>
            

        </main>
    </body>
    `;
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateHTML;

//extra html text for future use

// <!-- style sheets -->
// <!-- bootstrap -->
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
// <!-- developer stylesheets -->
// <link rel="stylesheet" href="develop/css/rest.css">
// <link rel="stylesheet" href="develop/css/style.css">
// <!-- jquery -->
// <script
// src="https://code.jquery.com/jquery-3.5.1.min.js"
// integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
// crossorigin="anonymous"
// ></script>
// <!-- end stylesheets -->