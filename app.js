var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');

// This is a pool of database connections allowed
var pool = mysql.createPool({
  connectionLimit : 100,
  host : 'localhost',
  user : 'root',
  password : 'pass',
  database : 'hackmaster'
});

// Simple get from db test
function handle_database(req,res,type,query) {

  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "error in connection  database"});
      return;
    }

    console.log('connected as id ' + connection.threadId);

    if(type == 'get') {
      connection.query(query, function(err, rows) {
        connection.release();
        if(!err) {
          res.json(rows);
        }
      });

      connection.on('error', function(err) {
        res.json({"code" : 100, "status" : "error in connection database"});
        return;
      });
    }

    if(type == 'post') {
      connection.query(query, function(err, rows) {
        connection.release();
        if(!err) {
          res.json(rows);
        }
      });
    }
  });
}
// end simple get from db test

// Allow express to send static files from the public directory
app.use(express.static(__dirname + '/public'));

// Establish get routes to the public files via url bar
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
//  handle_database(req,res);
});
app.get('/search', function(req, res) {
//  handle_database(req,res,'post',
//    "insert into posts (title, post, tags) values ('jsTitle', 'jsPost', 'jsTags')");
  handle_database(req,res,'get','select * from posts');
//  res.sendFile(__dirname + '/public/index.html')
});
app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/add', function(req, res) {
  res.sendFile(__dirname + '/public/add.html')
  handle_database(req,res);
});
app.get('/docs', function(req, res) {
  res.sendFile(__dirname + '/public/docslist.html')
});
app.get('/docslist', function(req, res) {
  res.sendFile(__dirname + '/public/docslist.html')
});
app.get('/training', function(req, res) {
  res.sendFile(__dirname + '/public/training.html')
});

// Start server
app.listen(9001, function() {
  console.log('Hackmaster9001 listening on port 9001!');
});
