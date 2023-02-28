# README Generator

A command-line application that dynamically generates a professional README.md file from a user's input.

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

Create a command-line application that accepts user input.

When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:

The title of my project

Sections entitled:

Description

Table of Contents

Installation

Usage

License

Contributing

Tests

Questions

When a user enters the project title, it's displayed as the title of the README.

When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

## Method

- Set up .gitignore and package.json
- Install NPM
- Create function to generate license badge
- Add list of questions to index.js
- Use Inquirer function for questions and answers from user input in command line
- Add a function to write the README
- Add a function to initialise
- Add a function to generate a markdown template
- Test and fix bugs

## Links

[Link to repository](https://github.com/maclauren/readme-generator)
[Link to video walkthrough](https://drive.google.com/file/d/1OCzHhtBwQLECDbIHJNVn1KGky56Jvf8J/view)

Sample README can be found in the files under READMESample.md