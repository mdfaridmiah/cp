/**
  Spread: Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or 
  more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or
  more key-value pairs (for object literals) are expected.

 */

sum = (x, y, z) => {
  return x + y + z;
}
const numbers = [1, 2, 3];

//ES5
console.log(sum.apply(null, numbers));

//ES6
console.log(sum(...numbers));

