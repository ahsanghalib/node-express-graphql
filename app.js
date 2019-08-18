// Libraries
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Our Packages
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./utils/path');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Serving static content 
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/admin', adminRouter);
app.use(shopRouter);

// 404 Page Request
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


// App Server
app.listen(5000);