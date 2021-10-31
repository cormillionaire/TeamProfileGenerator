const inquirer = require("inquirer");
const Manager = require("./Manager");

module.export = {
    employeeInfo: employeeInfo = (employeeArray) => {
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
            .then((val) => managerInfo(val, employeeArray))
    },
    managerInfoQ: managerInfo = (empVal, employeeArray) => {
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
                console.log(employeeArray)
            })
    },
    engineerInfo: engineerInfo = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your github un?',
                name: 'github'
            }
        ])
            .then(val =>
                employeeArray += val)
    },
    internInfo: internInfo = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your school?',
                name: 'school'
            }
        ])
            .then(val =>
                employeeArray += val)
    },
    anotherEmployee: anotherEmployee = () => {
        inquirer.prompt([
            {
                type: 'choice',
                message: 'Do you have any more employees on your team?',
                name: 'employeeRole',
                choices: ['Engineer', 'Intern', 'I don\'t have anymore to add']
            }
        ])
            .then((defineEmployee) => {
                if (defineEmployee === 'Engineer') {

                } else if (defineEmployee === 'Intern') {

                } else { }

                //if pick "engineer",ask function engineer questions
            })
    }
}