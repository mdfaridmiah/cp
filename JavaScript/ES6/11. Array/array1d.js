var arr1 = new Array(5);
console.log(arr1);

var arr2 = Array.apply(null, Array(5)).map(function (x, i) { return i; })
console.log(arr2);
