// syntax: str.slice(beginIndex[, endIndex])


var str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));

var s1 = str.slice(31);
console.log(str);
console.log(s1)
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));
