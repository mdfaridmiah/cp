// syntax: mySet[Symbol.iterator]

var mySet = new Set();

mySet.add(42);
mySet.add(1);
mySet.add(42);
mySet.add(5);



var it = mySet[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


for (var v of mySet) {
    console.log(v);
}

// clear

mySet.clear();
console.log(mySet.size);
