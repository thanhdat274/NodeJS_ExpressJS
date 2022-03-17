import express from "express";
const homeRouter = express.Router();

homeRouter.get('/', (request, response) => {
    response.send(`
        <h1>Home Page</h1>
        <p>Hi các bạn</p>
    `);
});

export default homeRouter