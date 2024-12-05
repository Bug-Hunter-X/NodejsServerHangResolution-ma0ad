const http = require('http');

const server = http.createServer((req, res) => {
  //This is a common error in Node.js where the response is not ended properly.
  //If the response is not ended, the client will hang waiting for the server to complete the response.
  //The solution is to always end the response with res.end() after sending the headers and the body.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  // Missing res.end() here
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});