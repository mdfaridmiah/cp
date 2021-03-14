var student = { };

// adding a property
student.name = 'Amir';

// adding a method
student.greet = function() {
    return "Hello";
}

// accessing a method
console.log(student.greet() + " " + student.name);

