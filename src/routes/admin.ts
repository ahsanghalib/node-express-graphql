import { Router } from 'express';
import { getAddProduct, postAddProducts } from '../controllers/products';

// Router init.
const adminRouter: Router = Router();

// /admin/add-product => GET
adminRouter.get('/add-product', getAddProduct);

// /admin/add-product => POST
adminRouter.post('/add-product', postAddProducts);

// exports
export default adminRouter;
