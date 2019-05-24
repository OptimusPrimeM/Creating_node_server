/*Code modulse*/
const http = require('http');

/*Code modules*/
const express = require('express');

/*Custom modules*/
const routes = require('./routes');

const app = express();

const server = http.createServer(routes);

server.listen(3000);