// point to Reference

var arr1 = ["Apple", "Orange", "Plum"];
var arr2 = arr1;
arr2[0] = "Elppa";
console.log(arr1);

//for() Loop
var numbers = [1, 2, 3];
var numbersCopy = [];

for (i = 0; i < numbers.length; i++) {
  numbersCopy[i] = numbers[i];
}
numbersCopy[0] = 100;
console.log(numbers);


// Using map 
var numbers2 = [1, 2, 3];
var numbersCopy2 = numbers.map((x) => x);
numbersCopy2[0] = 100;
console.log(numbers2);


// 2d Array
var arr2d = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
var arr2dCopy = numbers.map((x) => x);
arr2dCopy[0] = 100;
console.log(arr2d);

