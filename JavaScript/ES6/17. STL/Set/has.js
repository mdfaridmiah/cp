// syntax: mySet.has(value);
 
var mySet = new Set();

mySet.add(42);
mySet.add('forty two');
mySet.add('0');
mySet.add(1);
mySet.add({});
mySet.add({'key1': 1});

console.log(mySet.has(1));
console.log(mySet.has(5));
// console.log(mySet.has({}));
console.log(mySet.has({'key1': 1}));
console.log(mySet.has(obj));

var obj = {};
var eobj = {};
mySet.add(obj);
console.log(mySet.has(obj));
console.log(mySet.has(obj));
console.log(mySet.has(1));
console.log(mySet.has(obj));


obj = {'key2': 2};
mySet.add(obj);
console.log(mySet.has(obj));

console.log(mySet.has(eobj));


var key2 = {'key2': 2};
console.log(mySet.has(key2));


var arr = [1,2];
mySet.add(arr);
var arr2 = [];
console.log(mySet.has(arr2));

var arr3 = [12];
mySet.add(arr3);
console.log(mySet.has(arr3));

var a = 10;
var b = 10;
mySet.add(a);
mySet.add(b);

for (var v of mySet) {
    console.log(v);
}
