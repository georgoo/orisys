var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET Register page. */
router.get('/register', function(req, res, next) {
  res.render('Register',);
});

router.get('/addPost', function(req, res, next) {
  res.render('addPost',);
});
router.get('/post', function(req, res, next) {
  res.render('Post',);
});

module.exports = router;
