// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// pop back
// syntax: arr.pop()

// ----------- Example-1 -----------
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);


// ----------- Using apply() or call () on array-like objects -----------
var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};
var popped = Array.prototype.pop.call(myFish); 
console.log(myFish);
console.log(popped);


var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};
var popped = [].pop.apply(myFish); 
console.log(myFish);
console.log(popped);
