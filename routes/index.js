// var express = require('express');
// var router = express.Router();

// /* GET Login page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });

// /* GET Register page. */
// router.get('/register', function(req, res, next) {
//   res.render('Register',);
// });

// router.get('/addPost', function(req, res, next) {
//   res.render('addPost',);
// });
// router.get('/post', function(req, res, next) {
//   res.render('Post',);
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../contoller/userController')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET user Signup page. */
router.get('/register', userController.getRegister)

/* POST user Signup page. */
router.post('/signup', userController.handleRegister)

/* GET user Login page. */
router.get('/login', userController.getLogin)

/* POST user Login page. */
router.post('/login', userController.handleLogin)

/* GET user Login page. */
router.get('/posts',userController.getAllPosts)

/* GET user Login page. */
router.post('/posts',userController.createPost)


module.exports = router;
