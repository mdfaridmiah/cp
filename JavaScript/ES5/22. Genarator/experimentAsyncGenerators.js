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

// Generators
function* someDragons() {
  while(true) {
    var enoughDragonsSpawned = Math.random() > 0.75
    if (enoughDragonsSpawned) return
    yield makeDragon()
  }
}

// Generators
var range = {
  from: 1,
  to: 5,

 [Symbol.iterator]: function*() { // a shorthand  *[Symbol.iterator]()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

for(var value of range) {
  console.log(value); 
}

// AsyncGenerator
async function* generateSequence(start, end) {

  for (var i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }

}

(async () => {

  var generator = generateSequence(6, 10);
  for await (var value of generator) {
    console.log(value);
  }

})();