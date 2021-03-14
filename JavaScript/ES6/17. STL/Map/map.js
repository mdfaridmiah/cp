// syntax: myMap.set(key, value)

var mp = new Map();
mp.set('bar', 'foo');
mp.set('0', 'foo2');
mp.set(1, 'bar');
mp.set({}, 'baz');
mp.set('bar', 'foo3');

console.log(mp.get('bar'));
console.log(mp.get('baz'));
console.log(mp.get('bar'));


var myMap = new Map(); 
myMap.set('bar', 'foo')
    .set(1, 'foobar')
    .set(2, 'baz');
console.log(myMap);

// size
console.log(mp.size);

// has
console.log(myMap.has(1));