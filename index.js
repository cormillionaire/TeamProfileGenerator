const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const questions = require("./src/questions");
const page = require("./src/createPage");

const employeeArray = [];
employeeInfo(null, employeeArray);