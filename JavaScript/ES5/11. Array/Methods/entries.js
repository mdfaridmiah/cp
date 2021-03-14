// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// ----------- Example-1 -----------
var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

var a = ['a', 'b', 'c'];

for (var [index, element] of a.entries()){
    console.log(index, element);
}

for (var e of a.entries()){
    console.log(e);
}

