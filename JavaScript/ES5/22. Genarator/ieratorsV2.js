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


var dragonArmy = {
  [Symbol.iterator] () {
      return {
        next () {
              var enoughDragonsSpawned = Math.random() > 0.75;
              if (!enoughDragonsSpawned)
              return {
                value: makeDragon(),
                done: false
              }
              return { done: true }
        }
      }
  }
}

for (const dragon of dragonArmy) {
  dragon
}

// ES6

// var dragonArmy = {
//   [Symbol.iterator]: () => {
//       return {
//         next (): => {
//               var enoughDragonsSpawned = Math.random() > 0.75
//               if (!enoughDragonsSpawned)
//               return {
//                   value: makeDragon(),
//                   done: false
//               }
//               return { done: true }
//         }
//       }
//   }
// }