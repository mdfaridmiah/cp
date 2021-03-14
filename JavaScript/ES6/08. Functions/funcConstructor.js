// var Amir = {
//     name: 'Amir',
//     yearOfBirth: 1993,
//     job: 'Programmer'
// };

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2021 - this.yearOfBirth);
    // return((2021 - this.yearOfBirth));
};

Person.prototype.howOld  = function() {
    return (2021 - this.yearOfBirth);
};

Person.prototype.lastName = 'Khan';


var Amir = new Person('Amir', 1993, 'programmer');
var Arif = new Person('Arif', 1995, 'business');
var Adnan = new Person('Adnan', 1997, 'data analyst');
var Saday = new Person('Saday', 1996, 'retired');

Amir.calculateAge();
Arif.calculateAge();
Adnan.calculateAge();
Saday.calculateAge();

console.log(Amir.lastName);
console.log(Arif.lastName);
console.log(Adnan.lastName);
console.log(Saday.lastName);
Amir.howOld();

console.log(Arif)


Person.prototype.display = function(){
    console.log("Name : "+this.name + " "+ this.lastName);
    console.log("Year Of Birth: "+ this.yearOfBirth)
    console.log( this.name  + " " +  this.howOld()+ " years old you.");
    console.log("Occupation: "+ this.job)
}


Amir.display();
Arif.display();
Adnan.display();
Saday.display();

console.log(Arif)
