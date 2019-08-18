// NPM Libraries
const path = require('path');
const express = require('express');

// Our Packages
const rootDir = require('../utils/path');
const adminData = require('./admin');

// Router Init.
const router = express.Router();

// / (home page) => GET
router.get('/', (req, res, next) => {
	console.log('shop.js -> ', JSON.stringify(adminData.product, null, 2));
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// Module exports
module.exports = router;
