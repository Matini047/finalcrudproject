var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('create');
});

router.post('/new', userController.createUser);

module.exports = router;
