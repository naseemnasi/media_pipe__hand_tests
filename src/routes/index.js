// var express = require('express');
// var router = express.Router();

module.exports = function(router){
	router.get('/', (req, res) => {
		res.render('index.ejs', { message: 'Welcome to AI Test' });
	});
};
