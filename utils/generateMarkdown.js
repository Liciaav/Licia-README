// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license, 'render');
  if (license === 'None') {
      return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  }
  return `* [License](#license)`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Title
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test
${data.test}

##License
${renderLicenseSection(data.license)}

## Question
${data.question}

## Table of Contents
${data.tableOfContetnts}
`;
}

export default generateMarkdown;