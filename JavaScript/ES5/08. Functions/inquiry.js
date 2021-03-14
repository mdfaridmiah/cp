// ----------- Testing purpose -----------
// implicit: Defult set 
// explicit: Manually set

function MyFunc() {
    var myVar = 1;
    this.x = 100;
}

MyFunc.prototype.y = 200;

var obj1 = new MyFunc();
console.log(obj1);

console.log(typeof MyFunc);
console.log(typeof obj1);
console.log(obj1.x);
console.log(obj1.y); 
console.log(obj1.myVar);


var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
 }

 console.log(rahim)

 console.log(Math.random()*3)