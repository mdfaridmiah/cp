// ----------- declare -----------
var myObject = new Object();
var myObject = {};



var user = {};
// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]);

// delete
delete user["likes birds"];

var key = "likes cake";
// same as user["likes birds"] = true;
user[key] = true;

// ----------- makeUser -----------
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
}
  
var user = makeUser("Amir", 28);
console.log(user.name);


var obj = {};
obj.__proto__ = 5; // assign a number
// [object Object] - the value is an object, didn't work as intended
console.log(obj.__proto__);


// ----------- "key" in object -----------
var user = { name: "John", age: 30 };
console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false



// ----------- for...in Loop -----------
var user = {
    name: "Amir",
    age: 28,
    isAdmin: true
};
  
for (let key in user) {
    // keys
    console.log( key );
    // values for the keys
    console.log( user[key] ); 
}


