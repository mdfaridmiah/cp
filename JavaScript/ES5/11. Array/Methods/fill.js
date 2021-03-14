// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// syntax: arr.fill(value[, start[, end]])

var arr = new Array(3);
for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); 
}
arr[0][2] = 10;
console.log(arr);
