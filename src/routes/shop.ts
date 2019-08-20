// NPM Libraries
import { Router } from 'express';
import { getProducts } from '../controllers/products';

// Router Init.
const shopRouter: Router = Router();

// / (home page) => GET
shopRouter.get('/', getProducts);

// Module exports
export default shopRouter;
