// syntax: str.split([separator[, limit]])

var str = 'The quick brown fox jumps over the lazy dog.';

var words = str.split(' ');
console.log(words[0]);

const chars = str.split('');
console.log(chars[0]);
const strCopy = str.split();
console.log(strCopy);