import express from 'express';
import homeRouter from "./routers/home"
import productRouter from "./routers/product"
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(homeRouter);
app.use("/api", productRouter);

mongoose.connect('mongodb://127.0.0.1:27017/we16307')
    .then(() => console.log("Connecting to db"))
    .catch(err => console.log("Error connecting to db"))

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})