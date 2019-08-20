// NPM Libraries
import path from "path";
import express from 'express';
import { urlencoded } from 'body-parser';

// Our Packages
import adminRouter from './routes/admin';
import shopRouter from './routes/shop';

const app: express.Application = express();

// for pug
app.set('view engine', 'pug');

// setting views folder by default its views
app.set('views', path.join(__dirname, 'views'));

// Body Parser middleware
app.use(urlencoded({ extended: false }));

// Serving static content
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRouter);
app.use(shopRouter);

// 404 Page Request
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// App Server
app.listen(5000);
