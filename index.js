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

function getHtml() {
   const html =  `
< !DOCTYPE html >
<html lang='en'>
<head>
<meta charset= "UTF-8">
<meta name= "viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv= "X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href=""
<title>Team Profile</title>

<style>
.row {
    display:flex;
    flex-wrap: wrap;
    margin: 20px auto;
}

.card {
    border-radius: 6px;
    padding:15px;
    background-color: antiquewhite;
    color: purple;
    margin 15px;
}

.text {
    border-radius: 6px;
    padding: 15px;
    background-color: purple;
    color: lightgrey;
    margin 15px;
}

.col{
    flex: 1;
    text-align: center;
}
</style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1">
            <h1>The Team</h1>
        </span>
    </nav>
    <div class="row">
    <div class ="card bg-dark justify-content-center align-items-center" style="width: 20rem;">
    <div class= "col card-header">
        <h4>${employeeArray.name}</h4>
    </div>
    <div class="col card-header">
        <h4>${employeeArray.role}</h4>
    </div>
    <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${employeeArray.id}</li>
        <li class="list-group-item">Email: ${employeeArray.email}</li>
        <li class="list-group-item">${displayRole(employeeArray)}</li>
    </ul>
</div>
</body>
</html>

`;

    const fs = require("fs");
    fs.writeFile('newfile.html', html, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

runInquirer();