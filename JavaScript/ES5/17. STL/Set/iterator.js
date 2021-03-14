// syntax: mySet[Symbol.iterator]

var mySet = new Set();

// Using [@@iterator]()
mySet.add(42);
mySet.add('forty two');
var it = mySet[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// Using for..of
mySet.add('0');
mySet.add(1);
mySet.add({});

for (var v of mySet) {
  console.log(v);
}

