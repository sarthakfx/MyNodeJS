var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index2.html','utf8');
    var msg = "Hello Sarthak, this is dynamic content!!!";
   html = html.replace('{message}', msg);
    res.end(html);
}).listen(8080,'localhost');