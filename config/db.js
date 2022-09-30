const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // host for connection
  port: 3306, // default port for mysql is 3306
  database: 'test', // database from which we want to connect out node application
  user: 'root', // username of the mysql connection
  password: 'root', // password of the mysql connection
});

module.exports = connection;
