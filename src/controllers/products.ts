import { Request, Response } from "express";

const products: any = [];

export const getAddProduct = (req: Request, res: Response) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

export const postAddProducts = (req: Request, res: Response) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

export const getProducts = (req: Request, res: Response) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'My Shop',
    path: '/',
  });
};

