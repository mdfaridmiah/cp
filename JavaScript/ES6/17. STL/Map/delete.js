// syntax: myMap.delete(key);

var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');
myMap.set('0', 'foo2');

console.log(myMap);

console.log(myMap.delete('0')); // delete and return true
console.log(myMap.has('0'));


myMap.forEach(function (value, key, map){
    console.log(key + ": "+ value);
});


console.log(myMap);

