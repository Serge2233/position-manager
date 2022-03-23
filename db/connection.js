const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',

    user: "root",

    password: "Safaria-2233",

    database: "employee_db"

});

module.exports = connection;