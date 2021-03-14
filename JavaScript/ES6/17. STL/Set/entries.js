// contains an array of [value, value] for each element in the Set object, in insertion order.
// syntax: mySet.entries()
 
var mySet = new Set();

mySet.add(42);
mySet.add('forty two');
mySet.add('0');
mySet.add(1);
mySet.add({});
mySet.add({'key1': 1});


var obj = {};
mySet.add(obj);
obj = {'key2': 2};
mySet.add(obj);
obj = {'key1': 1};
mySet.add(obj);
var a = 10;
var b = 10;
mySet.add(a);
mySet.add(b);


// var it = mySet.entries();

for (var entry of mySet.entries()) {
  console.log(entry);
}

