var express = require('express');

var app = express();

 app.use('/assets', express.static(__dirname, +'/public'));
/*
//html code
app.get('/', function(req,res){

    res.send('<html><head></head><body><h1>Hello Sarthak, Welcome to express!</h1></body></html>')
});
//routing

app.get('/person/:id', function(req, res){

    res.send('<html><head></head><body><h1>Hello, Your ID is : '+req.params.id+'</h1></body></html>')
})


//json

app.get('/api', function(req,res){

    res.json({firstname: 'Sarthak', lastname: 'Srivastava'})
});
*/


//static and middleware code
app.get('/css', function(req,res){

    res.send('<html><head><link href = assets/style.css type = text/css rel=stylesheet></link></head><body><h1>Hello Sarthak, Welcome to express!</h1></body></html>')
}); 
app.listen(3000);
