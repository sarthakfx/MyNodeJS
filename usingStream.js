var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   // var html = fs.readFileSync(__dirname + '/index.html');
    var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
  //  res.end(html);
}).listen(8080,'localhost');