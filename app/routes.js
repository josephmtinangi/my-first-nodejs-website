// require express
var express = require('express');
var path = require('path');

// create my router object
var router = express.Router();

// export my router
module.exports = router;

// route for home page
router.get('/', function(req, res) {
  res.render('pages/index');
});

// route for about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Joseph', email: 'josephmtinangi@gmail.com', avatar: 'http://placehold.it/200x200'},
    { name: 'Ragnar', email: 'ragnar@gmail.com', avatar: 'http://placehold.it/200x200'},
    { name: 'Viking', email: 'viking@gmail.com', avatar: 'http://placehold.it/200x200'},
    { name: 'King', email: 'king@gmail.com', avatar: 'http://placehold.it/200x200'}
  ];

  res.render('pages/about', { users: users});
}); 

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  
});