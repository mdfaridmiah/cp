var flip = x => x.split('').reverse()
var flipAndShout = x => flip(x)
var ans = flipAndShout('dlroW olleH') 
console.log(ans); 
console.log((ans.join()).length);
console.log((ans.join('')).length);
console.log((ans.join(', ')).length);
console.log(ans.join());
console.log(ans.join(''));
console.log(ans.join(', '));
console.log(ans.join(' + '));



// Joining an array-like object

function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(typeof s);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
