const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const home = require('./routers/home');
app.use(home);

const product = require('./routers/product');
app.use(product);


app.get('/products/:id', (request, response) => {
    response.send(`
        <h1>Detail Products Page</h1>
        ${request.params}
    `);
});

// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     if (request.url === "/") {
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h3>Home Page</h3>");
//         response.end();
//     }
//     if (request.url === "/products") {
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h3>Product Page</h3>");
//         response.end();
//     }
//     if (request.url === "/news") {
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h3>News Page</h3>");
//         response.end();
//     }
// });

const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})