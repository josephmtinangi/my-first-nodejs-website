// require express
var express = require('express');

// create my router object
var router = express.Router();

// export my router
module.exports = router;

// route for home page
router.get('/', function(req, res) {
  res.send('hello');
});

// route for about page
router.get('/about', function(req, res) {
  res.send('About page');
}); 

router.get('/contact');
router.post('/contact');