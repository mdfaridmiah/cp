// syntax: mySet.delete(value);
 
var mySet = new Set();

mySet.add(42);
mySet.add('forty two');
mySet.add('0');
mySet.add(1);
mySet.add({});
mySet.add({'key1': 1});


var obj = {};
mySet.add(obj);
obj = {'key2': 2};
mySet.add(obj);
obj = {'key1': 1};
mySet.add(obj);
var a = 10;
var b = 10;
mySet.add(a);
mySet.add(b);


for (var v of mySet) {
    console.log(v);
}


mySet.forEach((point) => {
    if (point.key1 == 1) {
        mySet.delete(point);
    }
    if(point == 10){
        mySet.delete(point);
    }
});

for (var v of mySet) {
    console.log(v);
}