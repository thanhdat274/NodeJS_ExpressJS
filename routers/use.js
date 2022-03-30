import express from "express";
import { signin, signup } from "../controllers/auth";


const Router = express.Router();

Router.post('/signup', signup);
Router.post('/signin', signin);


export default Router;