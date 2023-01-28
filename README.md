# Team Profile Creator
Node.js command line application creating a HTML team profile

----------------------------------------------------------------

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)   ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)  

[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

----------------------------------------------------------------
<!-- FIXME: future developements link not working -->

[About](#about)  ✦  [Installation](#installation)  ✦  [Usage](#usage)  ✦  [Future Developments](#future_developements)  ✦  [Resources](#resources)  ✦  [License](#license)  ✦  [Contact](#contact)

----------------------------------------------------------------

## About
This application uses the NPM Inquirer package. Users are able to input team member information via the command line interface. Once they have successfully answered all the questions, the application will produce a HTML webpage  which displays the full team. 

The application developement has used the Test Driven Development model. Please refer to the test files for more information regarding how the application was created. 

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
This program opporates from your command line interface(CLI). First navigate to the application directory. Then run the following commands:

```bash
npm init
npm install inquirer@8.2.4
```

## Usage
Once fully installed, this program is invoked with the following command:
```bash
node index.js
```
<!-- FIXME: confirm storage location -->
Once the application successfully created the README file, the file will be stored in the **Develop** folder.

To see this program in opperation, watch our live demo!
<!-- [![Youtube screen grab of live demo recording.](Develop/assets/img/youtube-screengrab.png)](https://www.youtube.com/watch?v=CsS6BedKSkE&ab_channel=CaoimheJyoti) -->

## Future Developments


## Resources
https://www.npmjs.com/package/inquirer/v/8.2.4
https://www.npmjs.com/package/string-validate



## License
This project is using the following license:

**MIT**

For further information regarding the license, please follow the link below:
 https://opensource.org/licenses/MIT

----------------------------------------------------------------

## Contact 
If you have any further questions, please contact via email or github.

<a href="mailto:caoimhejyoti@gmail.com"><img alt="Link to email contact address" src="https://img.shields.io/badge/email-D14836?style=for-the-badge" target="_blank" /></a>  <a href="https://github.com/caoimhejyoti"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>