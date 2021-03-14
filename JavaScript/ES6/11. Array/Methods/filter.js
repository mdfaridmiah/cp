// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
/*

syntax: let newArray = arr.filter(callback(currentValue[, index[, array]]) {
    // return element for newArray, if true
}[, thisArg]);

*/

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(function(word){
   return word.length > 6;
});
 
console.log(result);