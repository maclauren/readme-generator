// function to generate license badge for README
// fyi i received tutor help to fix my first attempt which is commented out below
function generateLicenseBadge(license) {
  if (license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
  // const licenseName = data.license[0];
  // let licenseCode = " "
  // if (licenseName === "MIT") {
  //   licenseCode = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  // };
  // if (licenseName === "GNU GPL v3") {
  //   licenseCode = `![License: GNU GPL v3](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  // };
  // if (licenseName === "Apache 2.0") {
  //    licenseCode = `![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  //   };
  // if (licenseName === "ISC") {
  //     licenseCode = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  //   };
  // return licenseCode
  };

  const generateLicenseLink = (license) => {
    if(license !== "Unlicensed") {
      return `\n* [License] (#license)\n`
    }
    return '';
  }

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${generateLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions about this project, contact ${data.email}. You can find more information and other projects on my [GitHub profile](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
