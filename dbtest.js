var mysql = require('mysql');
var express = require('express');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'pass',
  database : 'hackmaster',
});

connection.connect();

connection.query('SELECT * from posts', function(err, rows, fields) {
  if(!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
