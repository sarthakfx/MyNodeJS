var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World How are you !');
}
else if(req.url === '/more'){
res.writeHead(200, {'Content-Type': 'application/json'});
   
    var obj = {
        firstname: 'Sarthak',
        lastname: 'Srivastava'
    };
    res.end(JSON.stringify(obj));
}
    
else{

    res.writeHead(404);
    res.end();
}
}).listen(8080,'localhost');