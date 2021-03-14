class Animal {
  speak = () => console.log('makes sound')
}

class Dog extends Animal {
  speak = () => { console.log('woof'); }
}

class Cat extends Animal {
  speak = () => { console.log('meowww'); }
}

class Cow extends Animal {
  speak = () => { console.log('moooooo'); }
}

class Alien extends Animal {
  speak01 = () => { console.log('...10101101010100111110...'); }
}

let dog = new Dog()
let cat = new Cat()
let cow = new Cow()
let alien = new Alien()

dog.speak() // woof
cat.speak() // meowww
cow.speak() // moooooo
alien.speak(); // makes sound 