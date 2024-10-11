import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
  
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
        type: 'list',
        message: 'Provide a table of contents.',
        name: 'table of contents',
        choices: ['installation', 'usage', 'contribution', 'test', 'license', 'questions'],
    },
    {
        type: 'input',
        message: 'How can the user do the Installation?',
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
        message: 'Extra informations.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What is the license for your project?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU AGPLv3','None'],
    },
    {
        type: 'input',
        message: 'Frequent questions.',
        name: 'questions'
    },
    
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data, (err) => {
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
            writeToFile('./utils/generateREADME.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error in prompting questions', error);
        });
}

// Function call to initialize app
init();