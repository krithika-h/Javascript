const http = require('http');

const server = http.createServer((request, response) => {
  response.write('hello there!'); //this will be printed in server
  response.end();
});

server.listen(3000); //3000 is port number : website hosted in localhost:3000
                    // listen starts the server