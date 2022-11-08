// adding all the required dependencies
const inquirer = require("inquirer");
const fs = require("fs");

const path = require("path");

// for user input prompt
const generateReadme = ({
  title,
  installation,
  usage,
  contributing,
  tests,
  email,
  license,
  username,
}) =>
  // the readme file template
  `
  License: ${license}

## ${title}

## Table of Contents

  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#tests) 

## Usage:

    * ${usage}

## Installation

    * ${installation}

## Contributing

    * ${contributing}

## Tests

    To run tests, run the following command

    * ${tests}

## Questions1

     If you have any quesyions or feedback, please contact me at ${email} or checkout my github repo at https://github.com/${username}


  
`;

// Adding all the user questions
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "installation",
      message: "What installation/s are needed to run your program?",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe the usage of the App.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter Contributor/s to your App.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter tests conducted for your App",
    },
    {
      type: "input",
      name: "username",
      message: "what is your giyhub user name?",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license used for your App",
      choices: [
        "MIT",
        "Apache License 2.0",
        "Mozilla Public License 2.0",
        "Boost Software License 1.0",
        "GNU General Public License v3.0",
        "The Unlicense",
        "None",
      ],
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadme({ ...answers });
    // Readme file generator
    return fs.writeFileSync(
      path.join(process.cwd(), "README.md"),
      readMePageContent
    );
  });
