const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {


        res.write(`
        
        <!DOCTYPE html>
         <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Material Design Bootstrap</title>
      <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/css/mdb.min.css" rel="stylesheet">
    </head>
    
    <body>
    
    
    <div class="card hoverable">
    
      <h5 class="card-header info-color white-text text-center py-4">
        <strong>Send message</strong>
      </h5>
    
      <!-- Default form login -->
      <form class="text-center border border-light p-5" action="/message" method="POST">
      
      
          <div class="md-form">
            <input type="text" id="message" name="message" class="form-control">
            <label for="message">message</label>
          </div>
      
          <!-- Sign in button -->
          <button class="btn btn-info btn-block my-4" type="submit">Send</button>
    
      </form>
      <!-- Default form login -->
    
      </body>
      <!-- JQuery -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
      <!-- Bootstrap tooltips -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
      <!-- Bootstrap core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <!-- MDB core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/js/mdb.min.js"></script>
    
    
    </html>
        `);

        return res.end();

    }


    if (url === '/message' && method === 'POST') {

        const body = [];

        req.on('data', (chunck) => {
            console.log(chunck);
            body.push(chunck);
        });

        return req.on('end', () => {
            const paresdBody = Buffer.concat(body).toString();
            console.log(paresdBody);
            const message = (paresdBody.split('=')[1]).replace('+', " ");
            fs.writeFile("message.txt", message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });

        /*One way to do this 
        res.writeHead(302, {});*/



    }


    /* Default response*/


    res.write(`
        
        <!DOCTYPE html>
         <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Material Design Bootstrap</title>
      <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/css/mdb.min.css" rel="stylesheet">
    </head>
    
    <body>
    
    
    <div class="card hoverable">
    
      <h5 class="card-header info-color white-text text-center py-4">
        <strong>This is response</strong>
      </h5>
      </body>
    
      <!-- JQuery -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
      <!-- Bootstrap tooltips -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
      <!-- Bootstrap core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <!-- MDB core JavaScript -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.0/js/mdb.min.js"></script>
    
    
    </html>
        `);
}

/* 
Can export object with mltiple values 
module.exports = {
    handler : requestHandler,
    someString : "This is some string"
}

*/


module.exports = requestHandler;