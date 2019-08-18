// NPM Libraries
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHBS = require('express-handlebars');

// Our Packages
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./utils/path');

const app = express();

// view engine
// app.set('view engine', 'pug');
app.engine(
	'hbs',
	expressHBS({
		extname: 'hbs',
		defaultLayout: 'main-layout',
		layoutsDir: 'views/layouts/'
	})
);
app.set('view engine', 'hbs');

// setting views folder by default its views
app.set('views', 'views');

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Serving static content
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminData.route);
app.use(shopRouter);

// 404 Page Request
app.use((req, res, next) => {
	// res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
	res.status(404).render('404', { docTitle: 'Page Not Found' });
});

// App Server
app.listen(5000);
