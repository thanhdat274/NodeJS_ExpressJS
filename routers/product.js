import express from "express";
import { AddProduct, DeleteProduct, ListProduct, ListProductDetail, UpdateProduct } from "../controllers/product";
const productRouter = express.Router();


productRouter.get('/products', ListProduct);
productRouter.get('/products/:id', ListProductDetail);
productRouter.post('/products', AddProduct);
productRouter.delete('/products/:id', DeleteProduct);
productRouter.put('/products/:id', UpdateProduct);

export default productRouter