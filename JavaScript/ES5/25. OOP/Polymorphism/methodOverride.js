//ES5

// Animal "class"
function Animal() {}

// Animal methods
Animal.prototype.talk = function talk() {
  console.log('?')
}

// Bird "class"
function Bird() {
  // if you want to call the parent constructor, you can do that here
  // Animal.call(this, arg1, arg2, ... argN)
}

// Bird inherits from Animal
Bird.prototype = Object.create(Animal.prototype)
Bird.prototype.constructor = Bird

// Bird methods
Bird.prototype.talk = function() {
  console.log('tweet tweet')
}
Bird.prototype.fly = function() {
  console.log('flap flap')
}

// Parrot "class"
function Parrot() {
  // if you want to call the parent constructor, you can do that here
  // Bird.call(this, arg1, arg2, ... argN)
}

// Parrot inherits from Bird
Parrot.prototype = Object.create(Bird.prototype)
Parrot.prototype.constructor = Parrot

// Parrot methods
Parrot.prototype.talk = function() {
  console.log('polly want a cracker')
}

var a = new Animal()
var b = new Bird()
var p = new Parrot()

a.talk()
b.talk()
b.fly()
p.talk()
p.fly()

console.log(a);
console.log(b);
console.log(p);


// Analysis

/**
Animal {}
__proto__:
talk: ƒ talk()
constructor: ƒ Animal()
__proto__: Object


Bird {}
__proto__: Animal
constructor: ƒ Bird()
fly: ƒ ()
talk: ƒ ()
__proto__:
talk: ƒ talk()
constructor: ƒ Animal()
__proto__: Object

Parrot {}
__proto__: Bird
constructor: ƒ Parrot()
talk: ƒ ()
__proto__: Animal
constructor: ƒ Bird()
fly: ƒ ()
talk: ƒ ()
__proto__:
talk: ƒ talk()
constructor: ƒ Animal()
__proto__: Object

*/



// ES6
/*
class Animal {
  talk() {
    console.log('?')
  }
}

class Bird extends Animal {
  talk() {
    console.log('tweet tweet')
  }
  fly() {
    console.log('flap flap')
  }
}

class Parrot extends Bird {
  talk() {
    console.log('polly want a cracker')
  }
}

var a = new Animal()
var b = new Bird()
var p = new Parrot()

a.talk()
b.talk()
b.fly()
p.talk()
p.fly()

*/