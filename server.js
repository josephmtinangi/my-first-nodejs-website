// require dependencies
var express = require('express');
var app = express();
var port = 8080;

// start the server
app.listen(port, function() {
  console.log('App started on port ' + port);
});

// route for home page
app.get('/', function(req, res) {
  res.send('hello');
});

// route for about page
app.get('/about', function(req, res) {
  res.send('About page');
});