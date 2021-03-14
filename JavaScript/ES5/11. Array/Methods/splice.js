// syntax: let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);



var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

console.log(myFish);
console.log(removed);
console.log(myFish.length);



var myFish2 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
var removed2 = myFish2.splice(2, 2)

console.log(myFish2);
console.log(removed2);
console.log(myFish2.length);



var myFish3 = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed3 = myFish3.splice(2)
console.log(myFish3);
console.log(removed3);
console.log(myFish3.length);
