// syntax: myMap.set(key, value)

var mp = new Map();
mp.set('bar', 'foo');
console.log(mp.get('bar'));
console.log(mp.get('baz'));


var myMap = new Map(); 
myMap.set('bar', 'foo')
    .set(1, 'foobar')
    .set(2, 'baz');
console.log(myMap);