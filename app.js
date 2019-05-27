/*Core modulse*/
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    res.send(`<h1>Add products</h1>`);
});

app.use('/', (req, res, next) => {
    res.send(`<h1>Hello from express()</h1>`);
});

app.listen(3000);