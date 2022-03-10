const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send(`
        <h1>Home Page</h1>
        <p>Hi các bạn</p>
    `);
});
module.exports = router;