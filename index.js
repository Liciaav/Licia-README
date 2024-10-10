import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown";
  
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: '',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is the license for your project?',
        name: 'license',
    },
    {
        type: 'input',
        message: '',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Provide a table of your contents.',
        name: 'table of contents',
    },
   
];

// TODO: Create a function to write README file
function writeToFile'('readme.html', data) {
    fs.writeToFile(readme.html, data, (err) => {
        if(err) {
            console.log.error('Error writing to file', err);
            return;
        }
    console.log('README.md had been created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const markdownContent = generateMarkdown(responses);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error in prompting questions', error);
        });
}

// Function call to initialize app
init();