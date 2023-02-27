// function to generate license badge for README
function generateLicenseBadge(data) {
  const licenseName = data.license[0];
  let licenseCode = " "
  if (licenseName === "MIT") {
    licenseCode = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseName === "GNU GPL v3") {
    licenseCode = `![License: GNU GPL v3](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseName === "Apache 2.0") {
     licenseCode = `![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseName === "ISC") {
      licenseCode = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
    };
  return licenseCode
  };

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateLicenseBadge(data.license)}



`;
}

module.exports = generateMarkdown;
