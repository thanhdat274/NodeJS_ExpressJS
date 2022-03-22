import express from "express";
import { AddCate, DeleteCate, ListCate, ListCateDetail, UpdateCate } from "../controllers/category";
const cateRouter = express.Router();


cateRouter.get('/categoryProducts', ListCate);
cateRouter.get('/categoryProducts/:id', ListCateDetail);
cateRouter.post('/categoryProducts', AddCate);
cateRouter.delete('/categoryProducts/:id', DeleteCate);
cateRouter.put('/categoryProducts/:id', UpdateCate);

export default cateRouter