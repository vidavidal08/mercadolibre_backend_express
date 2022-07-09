"use strict";
const mysql = require("mysql");
//local mysql db connection
const dbconnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mercadolibre',
  port : '3306'
});

// Attempt to catch disconnects
dbconnection.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });

});



module.exports = dbconnection;