// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
/*syntax: 
var newArray = arr.map(callback(currentValue[, index[, array]]) {
    // return element for newArray, after executing something
}[, thisArg]); */

var array1 = [1, 4, 9, 16];

var map1 = array1.map(function(x){return x * 2});
console.log(map1);


// Using map generically
// ASCII encoding
var a = Array.prototype.map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
console.log(a);

