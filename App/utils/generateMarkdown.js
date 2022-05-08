// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    yourLicense = `[![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }else if (license === 'GPLv3'){
    yourLicense = `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }else if (license === 'Apache 2.0'){
    yourLicense = `[![Apache 2.0 license](https://img.shields.io/badge/License-Apache2.0-red.svg)]`
  }else{
    return '';
  }
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return`(https://opensource.org/licenses/MIT)`
  }
  if  (license === 'GPLv3'){
    return`(https://opensource.org/licenses/GPL-3.0)`
  }
  if (license === 'Apache 2.0'){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'No license.'){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    return `## License`
  }
  if(license === 'GPLv3'){
    return `## License`
  }
  if(license === 'Apache 2.0'){
    return `## License`
  }
  else if (license === 'No license.'){
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (`
    # ${data.Title}

    ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

    # Description
    ${data.Description}

    # Table of Contents

    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Credits](#Credits)
    - [License](#License)

    ## Installation

    ${data.Installation}

    ## Usage

    ${data.Usage}

    ## Credits

    ${data.Credits}

    ${renderLicenseSection(data.license)}

    ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

`);
}

module.exports = generateMarkdown;
