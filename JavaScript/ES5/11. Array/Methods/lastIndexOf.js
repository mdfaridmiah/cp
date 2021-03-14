/* The lastIndexOf() method returns the last index at which a given element 
can be found in the array, or -1 if it is not present. The array is 
searched backwards, starting at fromIndex. */
// syntax: arr.lastIndexOf(searchElement[, fromIndex])


var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));
console.log(animals.lastIndexOf('asdf'));