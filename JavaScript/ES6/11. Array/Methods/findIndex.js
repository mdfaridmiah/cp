// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// syntax: arr.findIndex(callback( element[, index[, array]] )[, thisArg])

// return first index

var array1 = [5, 12, 8, 130, 44];

var isLargeNumber = function (element){ return element > 13};
console.log(array1.findIndex(isLargeNumber));

var array2 = array1.findIndex( function (element){ return element > 13});
console.log(array2);
