// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
// syntax: arr.at(index)

// ----------- Example-1 -----------

var array1 = [1, 2, 3, 4, 5];
var index = 2;
array1.at(0)
console.log("Using an index of " + index +  " the item returned is "+ array1.at(index) );
index = -2;
console.log("Using an index of " + index + " item returned is " + array1.at(index));
 