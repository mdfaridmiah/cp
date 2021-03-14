// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
// syntax: arr.find(callback(element[, index[, array]])[, thisArg])

// return first number 
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element){ return element > 100});
console.log(found);