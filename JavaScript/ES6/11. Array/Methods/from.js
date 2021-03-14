// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// syntax: Array.from(arrayLike [, mapFn [, thisArg]])


console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], function(x){return x + x}));

// Array from a String
var arr1 = Array.from('foo');
console.log(arr1);

// Array from a Set
var set = new Set(['foo', 'bar', 'baz', 'foo']);
var arr2 = Array.from(set);
console.log(arr2)

// Array from a Map
var map = new Map([[1, 2], [2, 4], [4, 8]]);
var arr3 = Array.from(map);
console.log(arr3);

var mapper = new Map([['1', 'a'], ['2', 'b']]);
var arr4 = Array.from(mapper.values());
console.log(arr4);

var arr5 = Array.from(mapper.keys());
console.log(arr5);


// Array from a NodeList
/*
var images = document.getElementsByTagName('img');
var sources = Array.from(images, function(image){return  image.src});
*/
