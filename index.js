const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const questions = require("./lib/questions");
const page = require("./lib/createPage");

const employeeArray = [];
employeeInfo(null, employeeArray);