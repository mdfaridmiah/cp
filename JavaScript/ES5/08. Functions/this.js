// console.log(this);   // Point to Window Object

calculateAge(1990);

function calculateAge(year) {
    console.log(2021 - year);
    // console.log(this);  // Point to Global Object
}

var Amir = {
    name: 'Amir',
    yearOfBirth: 1990,
    calculateAge: function() {
        // console.log(this); // Inside Method 
        console.log(2021 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);  // Point to Window Object
        }
        // innerFunction();
    }
}

Amir.calculateAge();

var Arif = {
    name: 'Arif',
    yearOfBirth: 1995
};

Arif.calculateAge = Amir.calculateAge;
Arif.calculateAge();
console.log(Arif)

