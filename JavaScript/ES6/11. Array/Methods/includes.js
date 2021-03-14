// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// syntax: arr.includes(valueToFind[, fromIndex])


var array1 = [1, 2, 3];
console.log(array1.includes(2));

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));
console.log(pets.includes('cat',1));
console.log(pets.includes('bat',2));
