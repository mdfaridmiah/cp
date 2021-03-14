// explicitly modifying the inner __proto__ property

function User(name) {
  this.name = name;
  this.__proto__.__proto__ = Object.create(null);
}

User.prototype.print = function(){
  console.log(this.name);
}

var user = new User('Amir');
console.log(user);