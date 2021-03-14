var dragons = [
  "cool dragon",
  "angry dragon",
  "nasty dragon"
];



var randomNumber = function(){
  return  Math.floor(Math.random() * 3);
}
function makeDragon(){
  var rng =  randomNumber();
  return dragons[rng];
}

// User-defined iterables

var dragonArmy = {
  [Symbol.iterator]: function* () {
    while(true) {
      var enoughDragonsSpawned = Math.random() > 0.75
      if (enoughDragonsSpawned) return
      yield makeDragon()
    }
  },
}

/** 
var dragonArmy = {
  *[Symbol.iterator] () {
    while(true) {
      var enoughDragonsSpawned = Math.random() > 0.75
      if (enoughDragonsSpawned) return
      yield makeDragon()
    }
  },
}
*/

console.log(dragonArmy[Symbol.iterator]());
for (var dragon of dragonArmy) {
  console.log(dragon);
}


// Generators
function* someDragons() {
  while(true) {
    var enoughDragonsSpawned = Math.random() > 0.75
    if (enoughDragonsSpawned) return
    yield makeDragon()
  }
}

const iterator = someDragons()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// Iterators
function someDragons() {
  var iteration = -1
  var iterator = {
    next: function(){
      iteration++
      if (iteration === 0)
        return {value: 'fluffykins the lighting dragon', done: false }
      if (iteration === 1)
        return {value: 'waffle the time dragon', done: false }
      if (iteration === 2) {
        if (Math.random() < 0.50) {
          return { value: 'hardy the dog', done: true }
        }
      }
      return { value: undefined, done: true }
    }
  }
  return iterator;
}
var it = someDragons();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// ES6
/*
function someDragons() {
  var iteration = -1
  var iterator = {
    next: () => {
      iteration++
      if (iteration === 0)
        return {value: 'fluffykins the lighting dragon', done: false }
      if (iteration === 1)
        return {value: 'waffle the time dragon', done: false }
      if (iteration === 2) {
        if (Math.random() < 0.50) {
          return { value: 'hardy the dog', done: true }
        }
      }
      return { value: undefined, done: true }
    }
  }
  return iterator;
}
*/

