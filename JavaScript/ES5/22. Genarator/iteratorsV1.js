var dragons = [
    "cool dragon",
    "angry dragon",
    "nasty dragon"
];


var it = dragons[Symbol.iterator]();
console.log(it); // { [Iterator] }  
// console.log(Symbol.iterator);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());