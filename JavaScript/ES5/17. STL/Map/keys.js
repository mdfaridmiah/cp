// syntax: myMap.keys()

var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');
myMap.set('0', 'foo2');

var it = myMap.keys();
console.log(typeof it);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



myMap.forEach(function (value, key, map){
    console.log(key + ": "+ value);
});
