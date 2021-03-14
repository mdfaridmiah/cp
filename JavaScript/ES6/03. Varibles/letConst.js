// let: The let statement declares a block-scoped local variable, optionally initializing it to a value.
//const: Constants are block-scoped. The value of a constant can't be changed through reassignment, and it can't be redeclared.


// ----------- let -----------
try {
  console.log(x) 
}
catch (err) {
  console.log(err); // ReferenceError
}

let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);


// ----------- const -----------
const number = 42;
try {
  number = 99;
}
catch (err) {
  console.log(err); // TypeError
}
console.log(number);

for(let i = 1; i <= 5; i++){
  let number = i * 10;
  console.log(number)
}