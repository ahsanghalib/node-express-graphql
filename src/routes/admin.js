// NPM Libaries
import { Router } from 'express';

// Router init.
const router = Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
	});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	productArr.push({ title: req.body.title });
	res.redirect('/');
});

// data product array shared across
const productArr = [];

// exports
export const route = router;
export const product = productArr;
