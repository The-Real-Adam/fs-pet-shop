const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 6262

let server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile("./pets.json", 'utf8', function(err, data) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile("./pets.json", 'utf8', function(err, data) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(data);
      var data = JSON.stringify(pets[0]);

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile("./pets.json", 'utf8', function(err, data) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var pets = JSON.parse(data);
      var data = JSON.stringify(pets[1]);

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }

})


server.listen(port, () => {
  console.log("I am listening to requests on Port: ", port)
})
