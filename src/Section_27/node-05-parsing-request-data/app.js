const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  // on is  in nodejs like eventlistener in js
  // data is event like click in js
  request.on('data', chunk => {
    body.push(chunk);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString(); //one way of converting array of encoded chunks into a normal string
    let userName = 'Unknown User';
    if (body) {
      userName = body.split('=')[1];
    }
    response.setHeader('Content-Type', 'text/html');
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);
