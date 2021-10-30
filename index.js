const inquirer = require("inquirer");
const manager = require("/Manager");
const engineer = require("/Engineer");
const intern = require("/Intern");

const employeeArray = [];


//Prompt
////spread array into new array - ...common questions, manager questions
//build manager
    //when done, put response to constructor "manager" class
    //take object and stick to array const employee = []
    //.then(call another inquirer.prompt) - function 
function anotherEmployee() {
    inquirer.prompt([
        {
            text: 'Do'
        }
    ]) 
    .then((defineEmployee) => {
        if (defineEmployee === 'Engineer'){
        } else if(defineEmployee === 'Intern'){

        } else{}

        //if pick "engineer",ask function engineer questions
    })
}