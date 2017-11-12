var express = require('express');
var bodyparser = require('body-parser')
var app = express();
app.set('view engine','ejs');

var urlencodedparser = bodyparser.urlencoded({extended:false})



app.get('/', function(req, res){

    res.render('bodyparserpost');
});

app.post('/person',urlencodedparser, function(req, res){

  res.send('Thank you for POST req.')
  console.log(req.body.firstname);
  console.log(req.body.lastname);
})

app.listen(3000);