// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// syntax: arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])


const array1 = [1, 2, 3, 4];
const reducer = function (accumulator, currentValue) {
    console.log("accumulator: "+ accumulator);
    console.log("currentValue: "+ currentValue);
    console.log(accumulator + currentValue);
    return accumulator + currentValue
};
console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));



var ans = array1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(ans)

