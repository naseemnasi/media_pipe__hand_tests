// const express = require('express');
// const path = require('path');

module.exports = function(app){
	app.get('/', (req, res) => {
		res.json({ message: 'Welcome to AI Test' });
	});
};
