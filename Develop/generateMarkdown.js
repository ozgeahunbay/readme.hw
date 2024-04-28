// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license){}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("starting....")
  let license;
  switch (data.license) {
    case 'Attribution 4.0 international':
      license = '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'
      break;
    case 'Eclipse public license 1.0':
      license = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
    case 'The Hippocratic License 3.0':
      license = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'
      break;
    default:
      console.log("Invalid selection");
      break;
  }

  //return `# ${data.name}
  const result = ` 
# ${data.name}
##table of Contents
[Description](#description-of-the-data)

[License](#license)

[How to Install](#how-to-install)

[How to Use](#how-to-use)

[Github](#contact)

## Description of the Data
${data.description}
## License 
${license}
## How to install
${data.install}
## How to use: 
${data.usage}
## Contact
${data.questions}
    `
    
    console.log("result", result)
    return result;
};

module.exports = generateMarkdown;


// `hello.the name of my project is ${ name }
// here is a brief description of my project:
// ${description}
// the table of contents: ${table}
// how to install: ${install}
// how to use: ${usage}
// questions: ${questions}
// license: ${license}`
