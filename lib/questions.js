const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const page = require("./createPage");

module.export = {
    employeeInfo: employeeInfo = (role, employeeArray) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id'
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email'
                }
            ])
            .then((val) => { managerInfo(val, employeeArray)
                // switch (role) {
                //     case 'Engineer':
                //         engineerInfo(val, employeeArray);
                //         break;
                //     case 'Intern':
                //         internInfo(val, employeeArray);
                //         break;
                //     default:
                        
                //         break;
                // }
            })
    },
    managerInfo: managerInfo = (empVal, employeeArray) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your office phone number?',
                    name: 'phone'
                }
            ])
            .then(val => {
                employeeArray.push(new Manager(empVal.name, empVal.id, empVal.email, val.phone));
                anotherEmployee(employeeArray);
            })
    },
    engineerInfo: engineerInfo = (empVal, employeeArray) => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your github un?',
                name: 'github'
            }
        ])
        .then(val => {
            employeeArray.push(new Engineer(empVal.name, empVal.id, empVal.email, val.github));
            anotherEmployee(employeeArray);
        })
    },
    internInfo: internInfo = (empVal, employeeArray) => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your school?',
                name: 'school'
            }
        ])
        .then(val => {
            employeeArray.push(new Intern(empVal.name, empVal.id, empVal.email, val.school));
            anotherEmployee(employeeArray);
        })
    },
    anotherEmployee: anotherEmployee = (employeeArray) => {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Do you have any more employees on your team?',
                name: 'employeeRole',
                choices: ['Engineer', 'Intern', 'I don\'t have anymore to add']
            }
        ])
            .then((defineEmployee) => {
                if (defineEmployee.employeeRole === 'I don\'t have anymore to add') {
                    createPage(employeeArray);
                } else {
                    employeeInfo(defineEmployee.employeeRole, employeeArray);
                }
            })
    }
}