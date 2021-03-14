/*The reduceRight() method applies a function against an accumulator and
 each value of the array (from right-to-left) to reduce it to a single value. */

// syntax: arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])

/*
arr.reduceRight(function(accumulator, currentValue, index, array) {
    // ...
});
*/

var ans = [0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue;
  }, 0);

  console.log(ans);

