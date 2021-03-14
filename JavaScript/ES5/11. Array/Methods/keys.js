// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// syntax: arr.keys()


var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();

for (var key of iterator) {
  console.log(key);
}

var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
console.log(sparseKeys); 

// ES6
var denseKeys = [...arr.keys()];
console.log(denseKeys);