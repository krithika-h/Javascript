const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html'); //prints following line as Hello there!
        //if plain is used instead of html in above line then this is disaplayed ass whole string <h1>Hello there!</h1>
  response.write('<h1>Hello there!</h1>');
  response.end();
});

server.listen(3000);