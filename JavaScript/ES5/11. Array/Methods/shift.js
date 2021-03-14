// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// pop front
// syntax: arr.shift()

// ----------- Example-1 -----------
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
var shifted = myFish.shift();
console.log('myFish after:', myFish);
console.log('Removed this element:', shifted);

// ----------- Example-2 -----------
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
