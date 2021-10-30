const employeeInfo = () => {
    inquirer.prompt([
        {
            type: 'input' ,
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input' ,
            message: 'What is your id?',
            name: 'id'
        },
        {
            type: 'input' ,
            message: 'What is your email?',
            name: 'email'
        },
    ])
    .then(val =>
        employeeArray += val)
    .then(managerInfo())
}

const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input' ,
            message: 'What is your office phone number?',
            name: 'phone'
        }
    ])
    .then(val =>
        employeeArray += val)
}

const engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input' ,
            message: 'What is your github un?',
            name: 'github'
        }
    ])
    .then(val =>
        employeeArray += val)
}

const internInfo = () => {
    inquirer.prompt([
        {
            type: 'input' ,
            message: 'What is your school?',
            name: 'school'
        }
    ])
    .then(val =>
        employeeArray += val)
}

const anotherEmployee = () => {
    inquirer.prompt([
        {
            type: 'choice',
            message: 'Do you have any more employees on your team?',
            name: 'employeeRole',
            choices: ['Engineer', 'Intern', 'I don\'t have anymore to add']
        }
    ]) 
    .then((defineEmployee) => {
        if (defineEmployee === 'Engineer'){

        } else if(defineEmployee === 'Intern'){

        } else{}

        //if pick "engineer",ask function engineer questions
    })
}