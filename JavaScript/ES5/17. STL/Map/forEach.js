// syntax: myMap.forEach(callback([value][, key][, map])[, thisArg])


var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');


myMap.forEach(function (value, key, map){
    console.log(key + ": "+ value);
});
