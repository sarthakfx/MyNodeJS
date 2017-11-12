var express = require('express');

var app = express();
app.set('view engine','ejs');

//GET

app.get('/person/:id', function(req, res){

    res.render('personGet',{
        ID: req.params.id,
        Qstr: req.query.Qstr
    });
})

app.listen(3000);