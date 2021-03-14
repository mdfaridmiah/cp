// syntax: mySet.forEach(callback[, thisArg])

 
var mySet = new Set();

mySet.add(42);
mySet.add('forty two');
mySet.add('0');
mySet.add(1);
mySet.add({});

mySet.forEach(function(value1, value2, set) {
    console.log(value1 +" = " + value2);
});
