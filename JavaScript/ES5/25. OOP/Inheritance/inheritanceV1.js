// User extends Person

var __extends = function(user, person) {
  function fn() {
    console.log(this)
    this.constructor = user; 
  }
  fn.prototype = person.prototype;
  console.log(new fn())
  user.prototype = new fn();
};


var Person = (function() {

  function Person() {
    this.gender = 'Male';
  }
  Person.prototype.printPerson = function() {};
  return Person;

})();


var User = (function(Person) {
  // set User.prototype to Person object

  console.log(typeof User)
  __extends(User, Person);
  function User() {
    Person.call(this); // includes the properties for the Person object in the User object.
    this.name = 'Adnan';
  }
  // add User specific properties to the User.prototype
  User.prototype.printUser = function() {};
  return User;

})(Person);

var user = new User();
console.log(user);
console.log(user instanceof User);   
console.log(user instanceof Person);



//Analysis: 
/**
  User {gender: "Male", name: "Adnan"}
  gender: "Male"
  name: "Adnan"
  __proto__: Person
  constructor: ƒ User()
  printUser: ƒ ()
  __proto__:
  printPerson: ƒ ()
  constructor: ƒ Person()
  __proto__: Object
*/