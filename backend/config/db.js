const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // replace with your MySQL username
  password: 'parthgupta123',       // replace with your MySQL password
  database: 'securocheck'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = connection;
