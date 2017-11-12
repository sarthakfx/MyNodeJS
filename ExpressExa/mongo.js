
    var express = require('express');
    var mongoose = require('mongoose');

    var app = express();

    //connecting to the DB
    mongoose.connect('mongodb://sarthakdb:123ertyu@ds243345.mlab.com:43345/diary');

//creating a Schema
var Schema = mongoose.Schema;

    var personSchema = new Schema({

                firstname: String,
                lastname: String,
                phoneno: String,
                address: String
    });
//creating a model
var Person = mongoose.model('Person', personSchema);

    //adding seed date 

    var sarthak = Person({

        firstname: "Sarthak",
        lastname: "Srivastava",
        phoneno: "9876543212",
        address: "DLF, Hyderabad"
    })

        sarthak.save(function(err){

            if(err) throw err;

            console.log('Person has been Saved!!!');
        });
    var john = Person({
        
            firstname: "John",
            lastname:"Doe",
            phoneno: "8769877892",
            address: "California"
        
        })

        john.save(function(err){
            
                if(err) throw err;
            
                console.log('Person has been Saved!!!');
            });
         

  


                   
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
        console.log(users);

	});
	
	next();
});




 

            app.listen(3000);