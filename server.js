const http = require('http');
const port = process.env.PORT || 9092;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Witamy w sklepie z żaglówkami!');
}

const server = http.createServer(requestListener);
server.listen(port);
