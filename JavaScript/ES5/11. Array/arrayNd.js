var arr2d = [];
var row = 3, col = 5;

for(var i = 0; i < row; i++){
    arr2d[i] = [];
}
for(var i = 0; i < row; i++){
    for(var j = 0; j < col; j++){
        arr2d[i][j] = i;
    }
}
console.log(arr2d);



var arr1 = new Array(row);
for(var i = 0; i < row; i++){
    arr1[i] = new Array(col);
}
console.log(arr1)
