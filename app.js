/*Core modulse*/
const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
   console.log('This is first middleware');
   next();
});

app.use((req, res, next) => {
    console.log('This is second middleware');
    next();
});

const server = http.createServer(app);

server.listen(3000);