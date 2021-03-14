// The forEach() method executes a provided function once for each array element.

/*synteax:
arr.forEach(callback(currentValue[, index[, array]]) {
    // execute something
}[, thisArg]);
*/

const array1 = ['a', 'b', 'c'];
array1.forEach(function (element){console.log(element)});
