/* The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
// syntax: arr.join([separator])


var elements = ['Fire', 'Air', 'Water'];
console.log( typeof elements.join());
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s);
  }
  f(1, 'a', true);
