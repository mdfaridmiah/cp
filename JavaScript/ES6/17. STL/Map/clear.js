// syntax: myMap.clear();

var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

console.log(myMap);

myMap.clear();

console.log(myMap);
