// NPM Libraries
const path = require('path');
const express = require('express');

// Our Packages
const rootDir = require('../utils/path');

// Router Init.
const router = express.Router();

// / (home page) => GET
router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


// Module exports
module.exports = router;
