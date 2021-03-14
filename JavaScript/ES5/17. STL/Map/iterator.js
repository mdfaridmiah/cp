// syntax: myMap[Symbol.iterator]

var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var it = myMap[Symbol.iterator]();

console.log(typeof Symbol.iterator);
console.log(typeof it);


console.log(it.next().value) ;
console.log(it.next().value); 
console.log(it.next().value);



// with for..of

for (const item of myMap[Symbol.iterator]()) {
  console.log(item);
}

for (const entry of myMap) {
    console.log(entry);
}
 
for (const [key, value] of myMap) {
    console.log(key+  ": " + value);
}

