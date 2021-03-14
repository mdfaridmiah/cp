/*syntax: 
slice()
slice(start)
slice(start, end)*/

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


console.log(animals.slice(2));
var rest = animals.slice(2);
console.log(rest + " => "+ rest.length);
console.log(animals + " => "+ animals.length);
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
