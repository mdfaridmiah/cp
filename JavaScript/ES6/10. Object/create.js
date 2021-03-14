// Object.create
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


// ----------- example-1 -----------
var person = {
    isHuman: false,
    printIntroduction: function() {
      console.log( "My name is " + this.name + ". Am I human? " + this.isHuman);
    }
};
  
var me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();


// ----------- example-2 -----------
var personProto = {
    calculateAge: function() {
        console.log(2021 - this.yearOfBirth);
    }
};

var Amir = Object.create(personProto);
Amir.name = 'Amir';
Amir.yearOfBirth = 1990;
Amir.job = 'programmer';

var Anny  = Object.create(personProto, {
    name: { value: 'Anny' },  
    yearOfBirth: { value: 1980 },
    job: { value: 'teacher' }
});

Amir.calculateAge();
Anny.calculateAge();

