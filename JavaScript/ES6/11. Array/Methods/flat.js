// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// syntax: flat() ,flat(depth)

var arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

var arr2 = [0, 1, 2, [[3, 4]], [[[[ 1,2 ]]]] ];
console.log(arr2.flat(2));
