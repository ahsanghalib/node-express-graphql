// NPM Libraries
import { Router } from 'express';

// Our Packages
import { product } from './admin';

// Router Init.
const router = Router();

// / (home page) => GET
router.get('/', (req, res, next) => {
	const products = product;
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/'
	});
});

// Module exports
export default router;
