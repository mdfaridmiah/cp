// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax: arr.indexOf(searchElement[, fromIndex])


var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('asdf'));