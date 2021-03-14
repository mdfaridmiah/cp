// syntax: arr.sort([compareFunction])

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

// Error
var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);


function cmp(a, b) {
    return a - b;
}
array1.sort(cmp);
console.log(array1);


var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers)



var a = [10, 3,4, 2, 5, 1, 3,50];
a.sort(function(a, b) {
  if(a > b) return -1;
  else 1;
});

console.log(a);