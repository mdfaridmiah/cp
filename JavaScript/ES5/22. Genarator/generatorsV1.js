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

console.log(dragonArmy[Symbol.iterator]());

for (var dragon of dragonArmy) {
  console.log(dragon);
}



// Genarator Function
function* someDragons() {
  while(true) {
    var enoughDragonsSpawned = Math.random() > 0.75
    if (enoughDragonsSpawned) return
    yield makeDragon()
  }
}

var it = someDragons()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())


