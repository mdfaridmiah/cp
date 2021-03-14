/**
 Default parameters: Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
*/ 

 multiply = (a, b = 3)=> {
  return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5));
