var user = {
    name: "Amir",
    age: 28
};
  
var clone = {}; // the new empty object
  
// let's copy all user properties into it
for (var key in user) {
    clone[key] = user[key];
}
// now clone is a fully independent object with the same content
clone.name = "Adnan"; // changed the data in it
console.log( user.name );