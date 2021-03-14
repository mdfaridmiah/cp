// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// syntax: arr.every(callback(element[, index[, array]])[, thisArg])

var isBelowThreshold = function (currentValue){ return currentValue < 40; }
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));


var arr = array1.every(function(currentValue){
    return currentValue < 35;
})
console.log(arr);

