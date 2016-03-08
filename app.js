var express = require('express');
var app = express();
var path = require('path');

// Allow express to send static files from the public directory
app.use(express.static(__dirname + '/public'));

// Establish get routes to the public files via url bar
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/search', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});
app.get('/add', function(req, res) {
  res.sendFile(__dirname + '/public/add.html')
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
