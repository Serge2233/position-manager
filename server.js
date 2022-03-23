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

// View all Roles, Employees or Departments
function viewDept (){
    console.log('Showing departments...\n');
        connection.query('SELECT * FROM department', function(err, res){
        if(err)throw err
        console.table(res)
        mainPrompts();
    })}
function viewRoles (){
    console.log('Showing roles...\n');
        connection.query('SELECT * FROM role', function(err,res){
        if(err)throw err
        console.table(res)
        mainPrompts();
    })}
function viewEmp (){
    console.log('Showing employees...\n');
        connection.query('SELECT * FROM employee', function(err,res){
        if(err)throw err
        console.table(res)
        mainPrompts();
    })}

// Add Roles, Employees or Departments
function addRole(){
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the roles title?',
            type:'input'
        },
        {
            name: 'salary',
            message: 'What is the salary of this role?',
            type:'input'
        },
        {
            name: 'department_id',
            message: 'What is the new department id?',
            type:'list',
            choices: [
                {
                    name:'IT',
                    value: '1'
                },
                {
                    name:'Finance & Accounting',
                    value: '2'
                },
                {
                    name:'Sales & Marketing',
                    value: '3'
                },{
                    name:'Operations',
                    value: '4'
                },
            ]
        }
    ]).then(res =>{
        connection.query('INSERT INTO role SET ?',res,function(err){
            if(err)throw err
            console.log('New role is added.');
            mainPrompts();
        })
    })}
function addDept(){
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is the new department name?',
            type:'input'
        },
    ]).then(res =>{
        connection.query('INSERT INTO department SET ?',res,function(err){
            if(err)throw err
            console.log('New department is added.');
            mainPrompts();

        })
    })}
function addEmp (){
    inquirer.prompt([
        {
            name: 'first_name',
            message: "What is the emplyoee's first name?",
            type: 'input'
        },
        {
            name: 'last_name',
            message: "What is the emplyoee's last name?",
            type: 'input'
        },
        {
            name: 'role_id',
            message: "What is the emplyoee's role id?",
            type: 'input'
        }
    ]).then (res => {
        connection.query('INSERT INTO employee SET ?',res,function(err){
            if(err)throw err
            console.log('New employee is added.');
            mainPrompts();
        })
    })}

// Update Employees
function updateEmp (){
    inquirer.prompt([
        {
            name: 'role_id',
            message: "What is the new emplyoee's role id?",
            type: 'input'
        },
        {
            name: 'id',
            message: "What is the employee's id?",
            type:'input'
        }
        ]).then (res => {
        connection.query('UPDATE employee ?',res,function(err){
            if(err)throw err
            console.log('Employee role is updated.');
            mainPrompts();

        }).then
    })}

mainPrompts();

// MADE WITH HELP OF GOOGLE AND GITHUB PAGES!!!