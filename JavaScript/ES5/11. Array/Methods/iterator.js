// The @@iterator method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
// The initial value of the @@iterator property is the same function object as the initial value of the values() property.
// syntax: arr[Symbol.iterator]()

// ----------- Iteration using for...of loop -----------
var arr = ['a', 'b', 'c'];
var eArr = arr[Symbol.iterator]();

for (var letter of eArr) {
   console.log(letter);
}

// ----------- Alternative iteration -----------
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var eArr2 = arr2[Symbol.iterator]();
console.log(eArr2.next().value);  
console.log(eArr2.next().value);  
console.log(eArr2.next().value);  
console.log(eArr2.next().value);  
console.log(eArr2.next().value);  


// ----------- Use Case for brace notation -----------
function logIterable(it) {
     /* or "Symbol.iterator in Object.__proto__"
       or "it[Symbol.iterator]" */
    if (!(Symbol.iterator in Object.getPrototypeOf(it))) {
      console.log(it, ' is not an iterable object...');
      return;
    }
    var iterator = it[Symbol.iterator]();
     for (var letter of iterator) {
        console.log(letter);
     }
}

// Array
logIterable(['a', 'b', 'c']);
// string
logIterable('abc');
logIterable(123);