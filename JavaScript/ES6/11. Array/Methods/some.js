/* The some() method tests whether at least one element in the array passes 
the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the 
provided function returns true; otherwise it returns false. 
It doesn't modify the array. */

// syntax: arr.some(callback(element[, index[, array]])[, thisArg])


const array = [1, 2, 3, 4, 5];

console.log(array.some(function(element){
    return element % 2 === 0;
}));

