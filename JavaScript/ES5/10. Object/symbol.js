var id = Symbol("id");
console.log(id.toString());
console.log(id.description);


var id = Symbol("id");
var user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (var key in user) console.log(key);

// the direct access by the symbol works
console.log( "Direct: " + user[id] );