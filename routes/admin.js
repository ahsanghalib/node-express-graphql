// NPM Libaries
const path = require('path');
const express = require('express');

// Our Package
const rootDir = require('../utils/path');

// Router init.
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

// Module export
module.exports = router;
