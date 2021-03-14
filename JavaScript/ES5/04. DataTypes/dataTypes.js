// primitive data types

//string 
var stringName1 = "JavaScrint String--1";
var stringName2 = new String("JavaScrint String--2"); 
console.log(stringName1 + "\n"+stringName2)


// Number
var num1 = 10;
var num2 = Number(20);
console.log(num1 + "\n"+num2);


// Boolean
var bool1 = new Boolean(true);
var bool2 = new Boolean(false);
var bool3 = new Boolean(0);
var bool4 = new Boolean(10);
var bool5 = new Boolean(-10);
console.log(bool1 + "\n"+bool2 + "\n"+ bool3 + "\n" + bool4 + "\n" + bool5);


// Undefined
var myValue;
if(myValue == undefined){
    console.log("MyValue is undefine");
}else{
    console.log("MyValue is: "+ myValue);
}


// Null
var sName = null;
if(sName == null){
    console.log("sName is NULL");
}else{
    console.log("sName is: "+ sName);
}


// non-primitive data types

// Object , Array, RegExp