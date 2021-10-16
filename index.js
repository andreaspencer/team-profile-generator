const inquirer = require('inquirer');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");

function runIquirer() {
    const promptArray = [
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: 'id'
        },
        {
            type: "input",
            message: "what is your email?",
            name: "email"
        },
        {
            type: "list",
            message: "What is your title?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "title"
        }
    ];

    return inquirer.prompt(promptArray);
}

function runIquirerManager() {
    const promptArray = [
        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }
    ];

    return inquirer.prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [
        {
            type: 'input',
            message: 'What is your github?',
            name: "github"
        }
    ];

    return inquirer.prompt(promptArray);
}

function runIquirerIntern() {
    const promptArray = [
        {
            type: 'input',
            message: 'What school do you attend?',
            name: 'school'
        }
    ];

    return inquirer.prompt(promptArray);
}

function runPrompts() {
    const employeeArray = [];
    const promise = new Promise((resolve, reject) => {
        runIquirer().then(function ({ name, id, email, role }) {
            if (role === "Manager") {
                runIquirerManager().then(function ({ office }) {
                    this.employee = new Manager(name, id, email, office, role);
                    employeeArray.push(this.employee);
                    resolve("done");
                });
            } else if (role === "Engineer") {
                runInquirerEngineer().then(function ({ github }) {
                    this.employee = new Engineer(name, id, email, github, role);
                    employeeArray.push(employee);
                    resolve('done');
                });
            } else if (role === "Intern") {
                runIquirerIntern().then(function ({ school }) {
                    this.employee = new Intern(name, id, email, school, role);
                    employeeArray.push(employee);
                    resolve("done");
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    });
    const result = await promise;
    console.log(result);
}

function displayRole(employee) {
    if (employee.role === "Manager") {
        return `office: ${employee.office}`;
    }
    if (employee.role === "Engineer") {
        return `github: ${employee.github}`;
    }
    if (employee.title === "Intern") {
        return `school: ${employee.school}`;
    }
}

function getCardHtml() {
    
}