// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// push front
// syntax: arr.unshift(element1[, ...[, elementN]])

// ----------- Example-1 -----------
var array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);

// ----------- Example-2 -----------
var arr = [1, 2]
arr.unshift(0)                
arr.unshift(-2, -1)         
arr.unshift([-4, -3])        
arr.unshift([-7, -6], [-5])  
console.log(arr);