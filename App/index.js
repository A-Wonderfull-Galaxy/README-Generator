// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');//template

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What would you like your project to be called?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license you would like to use',

        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'No license.']
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the instructions need to install the repo?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What are the uses for this repo?'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Who is credited for this repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) throw err;
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {writeToFile('README.md', generateMarkdown(answers))} )
    .then((err) => err ? console.log('An err occured', err) : console.log('README was created'));
};

// Function call to initialize app
init();
