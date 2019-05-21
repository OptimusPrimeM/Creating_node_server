const http = require('http');

/* Define seperate function and add that to createServer()

function reqListner(req, res) {
    console.log(req);
}

http.createServer(reqListner);
*/

/* Define anonymous function and add that to createServer()

http.createServer(function (req, res) {
    console.log(req);
});

*/

/* Using arrow function*/

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    /*Quiting from event loop*/
    process.exit();
});

server.listen(3000);