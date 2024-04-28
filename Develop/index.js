// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "name",
    },
    {
        type: "input",
        message: "Please describe what your project does",
        name: "description",
      },
      {
        type: "input",
        message: "Please give installation instructions",
        name: "install",
      },
      {
        type: "input",
        message: "Please describe how to use your page",
        name: "usage",
      },
      {
        type: 'list',
        message:'Which license are you using?',
        name: 'license',
        choices: ['Attribution 4.0 international', 'Eclipse public license 1.0', 'The Hippocratic License 3.0'],
      },
      {
        type: "input",
        message: "please provide a link to your github page and a good email address where you can be reached",
        name: "questions",
      },
     
  ]).then((data) => {
    console.log(data)
    //const readMePageContent = generateMarkdown(answers);
    const output = generateMarkdown(data)
    console.log(output)

    fs.writeFile('README.md', output, (err) => {
      err ? console.log(err) : console.log('Successfully created README')
  });
});


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
