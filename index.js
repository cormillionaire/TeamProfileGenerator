const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const questions = require("./lib/questions");

const employeeArray = [];

employeeInfo(employeeArray);

//Prompt
////spread array into new array - ...common questions, manager questions
//build manager
    //when done, put response to constructor "manager" class
    //take object and stick to array const employee = []
    //.then(call another inquirer.prompt) - function