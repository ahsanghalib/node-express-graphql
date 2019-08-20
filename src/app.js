// NPM Libraries
import { join } from 'path';
import express from 'express';
import { urlencoded } from 'body-parser';

// Our Packages
import { route } from './routes/admin';
import shopRouter from './routes/shop';

const app = express();

// for pug
app.set('view engine', 'pug');

// setting views folder by default its views
app.set('views', 'src/views');

// Body Parser middleware
app.use(urlencoded({ extended: false }));

//Serving static content
app.use(express.static(join(__dirname, '../public')));

// Routes
app.use('/admin', route);
app.use(shopRouter);

// 404 Page Request
app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// App Server
app.listen(5000);
