//Requirements here
const inquirer = require("inquirer");
const writefile = require('fs')
const generate = require('./utils/generateMarkdown');
//Questions here
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"

       

    },
];
// //function to write README
function writeToFile(fileName, Data) {
    writeFile(fileName, data, (err) => console.log ('error in write file',  err));
};
//function to init app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('answers are:',  answers);
    const markDown = generateMarkdown(answers);
    console.log('generated markdown:', markDown);
    writeToFile(answers.title + '_readme.md', markDown)
}
//function call to init app
init()