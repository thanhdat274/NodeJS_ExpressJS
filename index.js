import express from 'express';
import cors from 'cors'
import homeRouter from "./routers/home"
import productRouter from "./routers/product"
import mongoose from 'mongoose';
import cateRouter from './routers/category';
import AuthRouter from './routers/use';

const app = express();

app.use(cors());
app.use(express.json());
app.use(homeRouter);
app.use("/api", productRouter);
app.use("/api", cateRouter);
app.use("/api", AuthRouter);

mongoose.connect('mongodb://127.0.0.1:27017/we16307')
    .then(() => console.log("Kết nối với Database thành công"))
    .catch(err => console.log("Kết nối với Database không thành công"))

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})