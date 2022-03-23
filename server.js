// Dependecies
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to Database
const connection = require('./db/connection');

// Start Prompts
function mainPrompts(){
    inquirer.prompt([
        {
            type:'list',
            name: 'choice',
            message: 'Select a choice to view or edit.',
            choices: [
                "View departments", 
                "View roles", 
                "View employees", 
                "Add a department", 
                "Add a role", 
                "Add an employee", 
                "Update employees role"
            ]
        }
    ]).then(res =>{
        if (res.choice === "View departments" ){
            viewDept();

        }else if(res.choice === "Add a role"){
            addRole();
        } else if (res.choice === "View roles"){
            viewRoles();
        } else if (res.choice === "View employees"){
            viewEmp();
        }else if (res.choice === "Add a department"){
            addDept();
        }else if (res.choice === 'Add an employee'){
            addEmp();
        }else if (res.choice === 'Update employees role'){
            updateEmp();
        }
    })}
