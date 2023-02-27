function init () {
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptQuestions = () => {
return new Promise((resolve, reject) => {
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter project title:',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter instructions for installing your project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage information for your project:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'ISC'],
      },
      {
        type: 'input',
        message: 'Enter instructions for contributing to your project:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Enter instructions for testing your project:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
      },

    ])

    .then((answers) => {
        resolve(answers);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// function to write README file
promptQuestions()
  .then((response) => {
    return fs.writeFileSync(
      path.join(process.cwd(), 'README.md'),
      generateMarkdown(response)
    );
  })
  .catch((err) => {
    console.error(err);
  });
}

// function to initialize program
init();
