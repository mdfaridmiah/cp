var dragons = [
  "cool dragon",
  "angry dragon",
  "nasty dragon"
];


var it = dragons[Symbol.iterator]();
console.log(it); // { [Iterator] }  


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
              var enoughDragonsSpawned = Math.random() > 0.75
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
console.log(dragonArmy);
for (const dragon of dragonArmy) {
  console.log(dragon);
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

