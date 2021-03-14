// Declaration

var arr1= new Array();
console.log(typeof arr1);
var arr2 = [];
console.log(typeof arr2);

var arr3 = ["Apple", "Orange", "Plum"];
for(var i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}

var newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

for(var i = 0; i < newData.length; i++){
    console.log(newData[i]);
}


var arr4 = new Array(4);
for(var i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

