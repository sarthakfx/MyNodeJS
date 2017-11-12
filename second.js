var person = {

    firstname: 'Sarthak',
    lastname: 'Srivastava',
    greet: function(){
        console.log('Hello ,'+ this.firstname + '' + this.lastname);
    }
}

person.greet();
console.log(person['firstname']);