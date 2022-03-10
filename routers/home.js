const express = require('express');
const router = express.Router();

router.get('/products', (request, response) => {
    response.send(`
        <h1>Products Page</h1>
    `);
});
module.exports = router;